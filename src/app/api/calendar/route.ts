import { google } from "googleapis";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(_request: NextRequest) {
	try {
		const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
		const calendarId = process.env.GOOGLE_CALENDAR_ID;

		if (!serviceAccountKey || !calendarId) {
			return NextResponse.json(
				{ error: "Missing Google Calendar configuration" },
				{ status: 500 },
			);
		}

		// サービスアカウントの認証設定
		const credentials = JSON.parse(serviceAccountKey);
		const auth = new google.auth.GoogleAuth({
			credentials,
			scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
		});

		const calendar = google.calendar({ version: "v3", auth });

		const now = new Date();
		const oneWeekLater = new Date();
		oneWeekLater.setDate(now.getDate() + 30);

		const response = await calendar.events.list({
			calendarId,
			timeMin: now.toISOString(),
			timeMax: oneWeekLater.toISOString(),
			maxResults: 50,
			singleEvents: true,
			orderBy: "startTime",
		});
		const events = response.data.items || [];

		const formattedEvents = events.map((event) => ({
			id: event.id,
			summary: event.summary,
			start: event.start?.dateTime || event.start?.date,
			end: event.end?.dateTime || event.end?.date,
			description: event.description,
			location: event.location,
		}));

		return NextResponse.json({
			events: formattedEvents,
			count: formattedEvents.length,
		});
	} catch (error) {
		console.error("Calendar API error:", error);
		return NextResponse.json(
			{ error: "Failed to fetch calendar events" },
			{ status: 500 },
		);
	}
}
