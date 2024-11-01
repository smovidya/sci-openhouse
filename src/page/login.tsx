import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useState } from 'react';
import { Sponser } from '../components/ui/elements/sponser';
import { Header } from '../components/ui/elements/header';
import { useSetAtom } from 'jotai';
import { motion } from 'framer-motion';
import { page } from '../app'; // Adjust the import path to your atom file
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '../components/ui/alert-dialog';

const Login = () => {
	const [name, setName] = useState(''); //เก็บชื่อ
	const [isDialogOpen, setDialogOpen] = useState(false); // จัดการสถานะของ Alert Dialog
	const [haveName, setHaveName] = useState(true); // จัดการสถานะของ Alert Dialog
	const setPage = useSetAtom(page); // ฟังก์ชันสำหรับเปลี่ยนสถานะของหน้า
	//เปลี่ยนสถานะหน้า Home
	const handleQuestion = () => {
		if (name.trim() === '') {
			// ถ้าชื่อว่าง แสดงแจ้งเตือนและหยุดทำงาน
			setHaveName(false);
			return;
		} else {
			setHaveName(true);
		}
		setDialogOpen(true); // เปิด Alert Dialog
	};

	// ฟังก์ชันยืนยันการเปลี่ยนหน้า
	const confirmChangePage = () => {
		console.log({ name: name }); // แสดงชื่อใน console (สำหรับ debug)
		setPage('sai'); // เปลี่ยนหน้าไปยัง 'sai'
		setDialogOpen(false); // ปิด Alert Dialog
	};

	return (
		<motion.div
			className="bg-mobile flex flex-col items-center gap-5 h-dvh"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
		>
			<div className="flex flex-col items-center font-SilverStone-Regular rounded-[30px] h-[92%] w-[90%] px-4 py-4">
				{/* แสดงโลโก้ */}
				<img
					className="w-24 h-24 mt-1 mb-[-21px]"
					src="/assets/logo white-border-yellow.svg"
				/>
				<div className="pt-[62px]">
					<Header /> {/* แสดง Header */}
				</div>
				<div className="flex flex-col">
					<div className="text-center text-2xl mt-[1px] text-Yellow lowercase mb-4">
						DROP YOUR NAME {/* ข้อความให้ผู้ใช้กรอกชื่อ */}
					</div>

					{/* Input สำหรับรับชื่อ */}
					<Input
						type="text"
						placeholder="Your Name"
						className="w-72 h-12 font-sans bg-white border-transparent text-center rounded-md shadow-md mb-4"
						onChange={(e) => setName(e.target.value)} // อัปเดตค่า name เมื่อมีการกรอกข้อมูล
					/>

					{/* ปุ่ม Next */}
					<Button
						onClick={handleQuestion}
						type="submit"
						className="self-end w-20 h-10 px-6 py-2 font-sans rounded-md bg-Yellow hover:bg-yellow-500 text-black font-medium"
					>
						Next
					</Button>
				</div>
				<div className="mt-12">
					<Sponser /> {/* แสดงส่วนของสปอนเซอร์ */}
				</div>
			</div>

			{/* Alert Dialog แจ้งเตือนให้ใส่ชื่อ */}
			<AlertDialog open={!haveName}>
				<AlertDialogContent className="p-3 w-dvw max-w-72 rounded-md">
					<AlertDialogHeader>
						<AlertDialogDescription className="font-ibm-plex-thai text-start">
							กรุณาใส่ชื่อของคุณ
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter className="flex-row justify-end gap-2 ">
						<AlertDialogAction
							className=" w-15 h-15 font-ibm-plex-thai"
							onClick={() => setHaveName(true)}
						>
							ตกลง
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			{/* Alert Dialog สำหรับยืนยัน */}
			<AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
				<AlertDialogContent className="p-3 w-dvw max-w-72 rounded-md">
					<AlertDialogHeader>
						<AlertDialogTitle className="font-ibm-plex-thai text-start">
							คุณพร้อมรึยัง ?
						</AlertDialogTitle>
						<AlertDialogDescription className="font-ibm-plex-thai text-start">
							นี่เป็นเพียงเกมเพื่อความสนุกเท่านั้น ไม่มีผลต่อการตัดสินใจใด ๆ
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter className="flex-row justify-end gap-2">
						<AlertDialogCancel className="w-15 h-15 font-ibm-plex-thai mt-0">
							ยกเลิก
						</AlertDialogCancel>
						<AlertDialogAction
							className="w-15 h-15 font-ibm-plex-thai"
							onClick={confirmChangePage}
						>
							ตกลง
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</motion.div>
	);
};

export { Login }; // ส่งออก component Login
