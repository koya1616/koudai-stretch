import Link from "next/link";

export function Header() {
	return (
		<>
			<header className="shadow-md">
				<div className="flex justify-between items-center my-0 mx-auto w-[95%] h-14">
					<h1 className="font-bold">IMPROVE STRETCH</h1>
					<Link
						href="https://maps.app.goo.gl/5B4auCXvHaYtT2qg9"
						target="_blank"
						className="text-[8px] cursor-pointer"
					>
						〒572-0084 大阪府寝屋川市香里南之32-5
						<br />
						YNレジデンス 607号室
					</Link>
				</div>
			</header>
		</>
	);
}
