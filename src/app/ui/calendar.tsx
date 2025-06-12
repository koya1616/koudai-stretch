"use client";

import { useEffect, useState } from "react";

interface CalendarEvent {
	id: string;
	summary: string;
	start: string;
	end: string;
	description?: string;
	location?: string;
}

interface CalendarData {
	events: CalendarEvent[];
	count: number;
}

export default function Calendar() {
	const [calendarData, setCalendarData] = useState<CalendarData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchCalendarData() {
			try {
				const response = await fetch("/api/calendar");
				if (!response.ok) {
					throw new Error("Failed to fetch calendar data");
				}
				const data = await response.json();
				setCalendarData(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setLoading(false);
			}
		}

		fetchCalendarData();
	}, []);

	const formatDateTime = (startString: string, endString: string) => {
		const startDate = new Date(startString);
		const endDate = new Date(endString);
		return {
			monthDay: startDate.toLocaleDateString("ja-JP", {
				month: "short",
				day: "numeric",
			}),
			weekday: startDate.toLocaleDateString("ja-JP", {
				weekday: "short",
			}),
			startTime: startDate.toLocaleTimeString("ja-JP", {
				hour: "2-digit",
				minute: "2-digit",
			}),
			endTime: endDate.toLocaleTimeString("ja-JP", {
				hour: "2-digit",
				minute: "2-digit",
			}),
			dayOfMonth: startDate.getDate(),
		};
	};

	if (loading) {
		return (
			<div className="w-full">
				<h2 className="text-xl font-medium text-gray-900 mb-4">予約状況</h2>
				<div className="flex justify-center py-8">
					<div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent" />
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="w-full">
				<h2 className="text-xl font-medium text-gray-900 mb-4">予約状況</h2>
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<span className="text-red-800">エラー: {error}</span>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full">
			<h2 className="text-xl font-medium text-gray-900 mb-4">予約状況</h2>
			{calendarData && calendarData.events.length > 0 ? (
				<div className="space-y-2">
					{calendarData.events.map((event) => {
						const { monthDay, weekday, startTime, endTime, dayOfMonth } =
							formatDateTime(event.start, event.end);
						const isOddDay = dayOfMonth % 2 === 1;
						return (
							<div
								key={event.id}
								className={`border rounded-lg p-3 transition-colors ${
									isOddDay
										? "bg-blue-50 border-blue-200 hover:border-blue-400"
										: "bg-purple-50 border-purple-200 hover:border-purple-400"
								}`}
							>
								<div className="flex items-center gap-3">
									<div
										className={`w-3 h-3 rounded-full ${
											isOddDay ? "bg-blue-500" : "bg-purple-500"
										}`}
									/>
									<span className="font-medium text-gray-900">
										{monthDay}{" "}
										<span className="font-bold text-gray-800">{weekday}</span> •{" "}
										{startTime} - {endTime}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="text-center py-8">
					<p className="text-gray-500">予約なし</p>
				</div>
			)}
		</div>
	);
}
