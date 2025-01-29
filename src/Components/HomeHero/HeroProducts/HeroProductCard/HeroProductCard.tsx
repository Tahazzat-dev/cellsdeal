import { FaLongArrowAltRight } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link";

type HeroProductCardProps = {
    item: {
        image: string,
        title: string,
        category: string,
        // more fields can be added here
    }
}

export default function HeroProductCard({ item }: HeroProductCardProps) {
    return (
        <div className="max-w-[312.75px] bg-white p-[5px] border border-1 border-white">
            <div className="flex items-start">
                <div className="relative flex-shrink-0">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={121}
                        height={121}
                        className="object-cover h-[120px] w-[120px]"
                    />
                </div>
                <div className="flex flex-col gap-1 py-1 px-[15px]">
                    <Link href={'/'}>
                        <span className="text-[#ffc220] text-base font-normal capitalize">{item.category}</span>
                    </Link>
                    <h2 className="text-base leading-5 font-medium text-[#20292f]">{item.title}</h2>
                    <Link href={`/products/${item.title.replace(/\s+/g, '-').toLowerCase()}`} className="inline-flex items-center gap-2 text-[#777777] text-base leading-7 font-normal">
                        <span className="block">Shop Now</span>
                        <FaLongArrowAltRight className="w-4 h-4 text-[#777777]" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
