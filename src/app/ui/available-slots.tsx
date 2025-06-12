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

interface TimeSlot {
	monthDay: string;
	weekday: string;
	startTime: string;
	endTime: string;
	dateObj: Date;
}

export default function AvailableSlots() {
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

	const generateAvailableSlots = (): TimeSlot[] => {
		if (!calendarData) return [];

		const availableSlots: TimeSlot[] = [];
		const today = new Date();
		const endDate = new Date(today);
		endDate.setDate(today.getDate() + 30); // 30日間

		// 予約済みイベントを日付ごとに整理
		const bookedSlots = new Map<string, { start: Date; end: Date }[]>();
		for (const event of calendarData.events) {
			const startDate = new Date(event.start);
			const endDate = new Date(event.end);
			const dateKey = startDate.toISOString().split("T")[0];

			if (!bookedSlots.has(dateKey)) {
				bookedSlots.set(dateKey, []);
			}
			const slots = bookedSlots.get(dateKey);
			if (slots) {
				slots.push({ start: startDate, end: endDate });
			}
		}

		// 各日の空き時間を計算
		for (let d = new Date(today); d <= endDate; d.setDate(d.getDate() + 1)) {
			const currentDate = new Date(d);
			const dateKey = currentDate.toISOString().split("T")[0];

			// 営業時間: 8:00-22:00
			const dayStart = new Date(currentDate);
			dayStart.setHours(8, 0, 0, 0);
			const dayEnd = new Date(currentDate);
			dayEnd.setHours(22, 0, 0, 0);

			// その日の予約を取得してソート
			const dayBookings = bookedSlots.get(dateKey) || [];
			dayBookings.sort((a, b) => a.start.getTime() - b.start.getTime());

			let currentTime = new Date(dayStart);

			// 最初の予約前の空き時間
			if (dayBookings.length === 0) {
				// 予約がない場合は全日空き
				availableSlots.push({
					monthDay: currentDate.toLocaleDateString("ja-JP", {
						month: "short",
						day: "numeric",
					}),
					weekday: currentDate.toLocaleDateString("ja-JP", {
						weekday: "short",
					}),
					startTime: dayStart.toLocaleTimeString("ja-JP", {
						hour: "2-digit",
						minute: "2-digit",
					}),
					endTime: dayEnd.toLocaleTimeString("ja-JP", {
						hour: "2-digit",
						minute: "2-digit",
					}),
					dateObj: new Date(currentDate),
				});
			} else {
				// 予約間の空き時間を計算
				for (const booking of dayBookings) {
					// 現在時刻から予約開始時刻までの空き時間
					if (currentTime < booking.start && booking.start > dayStart) {
						const slotStart = new Date(
							Math.max(currentTime.getTime(), dayStart.getTime()),
						);
						if (slotStart < booking.start) {
							availableSlots.push({
								monthDay: currentDate.toLocaleDateString("ja-JP", {
									month: "short",
									day: "numeric",
								}),
								weekday: currentDate.toLocaleDateString("ja-JP", {
									weekday: "short",
								}),
								startTime: slotStart.toLocaleTimeString("ja-JP", {
									hour: "2-digit",
									minute: "2-digit",
								}),
								endTime: booking.start.toLocaleTimeString("ja-JP", {
									hour: "2-digit",
									minute: "2-digit",
								}),
								dateObj: new Date(currentDate),
							});
						}
					}
					currentTime = new Date(
						Math.max(currentTime.getTime(), booking.end.getTime()),
					);
				}

				// 最後の予約後の空き時間
				if (currentTime < dayEnd) {
					availableSlots.push({
						monthDay: currentDate.toLocaleDateString("ja-JP", {
							month: "short",
							day: "numeric",
						}),
						weekday: currentDate.toLocaleDateString("ja-JP", {
							weekday: "short",
						}),
						startTime: currentTime.toLocaleTimeString("ja-JP", {
							hour: "2-digit",
							minute: "2-digit",
						}),
						endTime: dayEnd.toLocaleTimeString("ja-JP", {
							hour: "2-digit",
							minute: "2-digit",
						}),
						dateObj: new Date(currentDate),
					});
				}
			}
		}

		return availableSlots.filter((slot) => slot.dateObj >= today);
	};

	if (loading) {
		return (
			<div className="w-full">
				<h2 className="text-xl font-medium text-gray-900 mb-4">空き時間</h2>
				<div className="flex justify-center py-8">
					<div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-500 border-t-transparent" />
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="w-full">
				<h2 className="text-xl font-medium text-gray-900 mb-4">空き時間</h2>
				<div className="bg-red-50 border border-red-200 rounded-lg p-4">
					<span className="text-red-800">エラー: {error}</span>
				</div>
			</div>
		);
	}

	const availableSlots = generateAvailableSlots();

	return (
		<div className="w-full">
			<h2 className="text-xl font-medium text-gray-900 mb-4">空き時間</h2>
			{availableSlots.length > 0 ? (
				<div className="space-y-2">
					{availableSlots.map((slot) => {
						const dayOfMonth = slot.dateObj.getDate();
						const isOddDay = dayOfMonth % 2 === 1;
						return (
							<div
								key={`${slot.monthDay}-${slot.weekday}-${slot.startTime}-${slot.endTime}`}
								className={`border rounded-lg p-3 transition-colors ${
									isOddDay
										? "bg-green-50 border-green-200 hover:border-green-400"
										: "bg-orange-50 border-orange-200 hover:border-orange-400"
								}`}
							>
								<div className="flex items-center gap-3">
									<div
										className={`w-3 h-3 rounded-full ${
											isOddDay ? "bg-green-500" : "bg-orange-500"
										}`}
									/>
									<span className="font-medium text-gray-900">
										{slot.monthDay}{" "}
										<span className="font-bold text-gray-800">
											{slot.weekday}
										</span>{" "}
										• {slot.startTime} - {slot.endTime}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="text-center py-8">
					<p className="text-gray-500">空きなし</p>
				</div>
			)}
		</div>
	);
}
