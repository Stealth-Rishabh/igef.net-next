"use client";
import  { useState } from 'react';
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PanelLeft, ChevronDown, ChevronRight,  } from 'lucide-react';
import {navlinks} from './navData';

const Drawer = () => {
   

    const CollapsibleNavItem = ({ item }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full py-2 px-4 font-semibold text-slate-200 tracking-wider hover:bg-white/10 rounded transition-colors">
                    {item.name}
                    {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <ul className="pl-4 space-y-1">
                        {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                                <SheetClose asChild>
                                    <Link
                                        href={subItem.path}
                                        className="block py-2 px-4 w-fit text-sm text-slate-200 hover:bg-white/10 rounded transition-colors"
                                    >
                                        {subItem.name}
                                    </Link>
                                </SheetClose>
                            </li>
                        ))}
                    </ul>
                </CollapsibleContent>
            </Collapsible>
        );
    };

    return (
        <Sheet>
            <SheetTrigger className="lg:hidden block">
                <PanelLeft className="w-8 h-8 text-slate-200" />
            </SheetTrigger>
            <SheetContent className="bg-primary-color overflow-auto z-[999]">
                <SheetHeader>
                    <SheetTitle className="text-white text-2xl font-bold text-left">Indo Global</SheetTitle>
                    <SheetDescription className="text-white text-left pt-5">
                        <nav>
                            <ul className="space-y-1">
                                {navlinks.map((item, index) => (
                                    item.name === "Blogs" ? (
                                        <li key={index}>
                                            <a 
                                                href="/blog" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="block py-2 px-4 w-fit font-semibold text-slate-200 tracking-wider hover:bg-white/10 rounded transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ) : (
                                        <li key={index}>
                                            {item.dropdown && item.name !== "Courses" ? (
                                                <CollapsibleNavItem item={item} />
                                            ) : (
                                                <SheetClose asChild>
                                                    <Link
                                                        href={item.path}
                                                        className="block py-2 px-4 w-fit font-semibold text-slate-200 tracking-wider hover:bg-white/10 rounded transition-colors"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </SheetClose>
                                            )}
                                        </li>
                                    )
                                ))}
                            </ul>
                        </nav>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default Drawer;


