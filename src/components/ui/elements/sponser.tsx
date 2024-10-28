import { Avatar, AvatarImage, AvatarFallback } from '../avatar';

const Sponser = () => {
	return (
		<div className="flex gap-2">
			<Avatar className="w-14 h-14">
				<AvatarImage className="max-w-fit object-contain" src="assets/sponser/logo AutumnScoop.webp" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="w-14 h-14">
				<AvatarImage className="w-13 h-13 p-1.5 object-contain bg-white" src="assets/sponser/logo GoaGae.webp" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="w-14 h-14">
				<AvatarImage className="p-1.5 object-contain bg-white" src="assets/sponser/logo HeartBeat.webp" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="w-14 h-14">
				<AvatarImage className="p-1 object-contain bg-[#0075C9]" src="assets/sponser/logo Lactasoy.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="w-14 h-14">
				<AvatarImage className="object-contain bg-[#00447B]" src="assets/sponser/logo ManSome 1.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</div>
	);
};

export { Sponser };
