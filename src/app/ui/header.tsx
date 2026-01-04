import Link from "next/link";

export function Header() {
	return (
		<header className="shadow-md">
			<div className="flex justify-between items-center my-0 mx-auto w-[95%] max-w-6xl h-14 px-2 sm:px-4">
				<Link
					href="/"
					className="font-bold text-sm sm:text-base md:text-lg transition-colors hover:text-blue-600"
				>
					IMPROVE STRETCH
				</Link>
				<Link
					href="https://maps.app.goo.gl/5B4auCXvHaYtT2qg9"
					target="_blank"
					className="text-[8px] sm:text-xs md:text-sm cursor-pointer transition-colors hover:text-blue-600 text-right"
				>
					〒572-0084 大阪府寝屋川市香里南之32-5
					<br />
					YNレジデンス 607号室
				</Link>
			</div>
		</header>
	);
}
