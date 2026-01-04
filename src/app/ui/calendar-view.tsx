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

export default function CalendarView() {
	const [calendarData, setCalendarData] = useState<CalendarData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [startX, setStartX] = useState<number | null>(null);

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

	const navigateDate = (direction: "prev" | "next" | "today") => {
		const newDate = new Date(selectedDate);
		const today = new Date();
		today.setHours(0, 0, 0, 0);

		if (direction === "prev") {
			newDate.setDate(newDate.getDate() - 1);
			if (newDate < today) return;
		} else if (direction === "next") {
			newDate.setDate(newDate.getDate() + 1);
		} else {
			setSelectedDate(new Date());
			return;
		}
		setSelectedDate(newDate);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setStartX(e.touches[0].clientX);
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		if (startX === null) return;

		const endX = e.changedTouches[0].clientX;
		const diff = startX - endX;

		if (Math.abs(diff) > 50) {
			if (diff > 0) {
				navigateDate("next");
			} else {
				const newDate = new Date(selectedDate);
				const today = new Date();
				today.setHours(0, 0, 0, 0);
				newDate.setDate(newDate.getDate() - 1);
				if (newDate >= today) {
					navigateDate("prev");
				}
			}
		}

		setStartX(null);
	};

	const getDayAvailableSlots = (): TimeSlot[] => {
		const availableSlots = generateAvailableSlots();
		return availableSlots.filter(
			(slot) => slot.dateObj.toDateString() === selectedDate.toDateString(),
		);
	};

	const daySlots = getDayAvailableSlots();

	const year = selectedDate.getFullYear();
	const month = selectedDate.getMonth() + 1;
	const day = selectedDate.getDate();
	const weekday = selectedDate.toLocaleDateString("ja-JP", { weekday: "long" });

	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const selectedDateOnly = new Date(selectedDate);
	selectedDateOnly.setHours(0, 0, 0, 0);
	const isPrevDisabled = selectedDateOnly <= today;
	const _isToday = selectedDateOnly.getTime() === today.getTime();

	return (
		<div
			className="w-full max-w-md mx-auto"
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			{/* Date navigation */}
			<div className="mb-6">
				<div className="text-center mb-4">
					<div className="text-sm text-gray-500 mb-1">
						{year}年{month}月
					</div>
					<div className="flex items-center justify-center gap-3">
						<div className="text-3xl font-bold text-gray-900">{day}</div>
						<div className="flex flex-col">
							<div className={"text-lg font-medium text-gray-700"}>
								{weekday}
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="button"
						onClick={() => navigateDate("prev")}
						className={`p-3 rounded-full transition-colors ${
							isPrevDisabled
								? "bg-gray-200 text-gray-400 cursor-not-allowed"
								: "bg-blue-500 text-white hover:bg-blue-600"
						}`}
						disabled={isPrevDisabled}
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<title>前へ</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>
					<button
						type="button"
						onClick={() => navigateDate("today")}
						className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
					>
						今日
					</button>
					<button
						type="button"
						onClick={() => navigateDate("next")}
						className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<title>次へ</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* Google Calendar-style time slots */}
			<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
				<div className="p-4 bg-gray-50 border-b border-gray-200">
					<h3 className="text-lg font-medium text-gray-900">空き時間</h3>
				</div>

				<div className="p-4">
					{daySlots.length > 0 ? (
						<div className="space-y-2">
							{daySlots.map((slot, index) => (
								<div
									key={`${slot.startTime}-${slot.endTime}-${slot.dateObj.getTime()}-${index}`}
									className="flex items-center justify-between p-3 border border-green-200 rounded-lg bg-green-50 hover:bg-green-100 cursor-pointer transition-colors"
								>
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-green-500 rounded-full" />
										<span className="text-sm font-medium text-green-800">
											{slot.startTime} - {slot.endTime}
										</span>
									</div>
								</div>
							))}
						</div>
					) : (
						<div className="text-center py-8">
							<div className="text-gray-400 mb-2">
								<svg
									className="w-12 h-12 mx-auto"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-label="時計アイコン"
								>
									<title>時計アイコン</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<p className="text-gray-500 text-sm">
								この日は空き時間がありません
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
