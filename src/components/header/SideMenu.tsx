import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from '@components/ui/sheet'
import { Menu } from 'lucide-react'
import { Image } from 'astro:assets'
import logo from '@assets/logo.svg'

function SideMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild className="lg:hidden">
				<button className="px-2 py-2">
					<Menu className="h-8 w-8" />
					<span className="sr-only">Open sidebar</span>
				</button>
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col justify-between">
				<SheetHeader>
					<a href="/" className="group block flex-shrink-0 cursor-pointer">
						<span className="text-neutral-1300 inline-flex gap-2 group-hover:opacity-80">
							{/* <Image src={logo} alt="Cold Email FYI" height={120} width={120} /> */}
						</span>
					</a>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	)
}

export default SideMenu
