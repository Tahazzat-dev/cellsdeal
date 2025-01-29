"use client";

import { Skeleton } from "@/Components/ui/skeleton";

export default function HeroProductCardSkeleton() {
    return (
        <div className="max-w-[312.75px] p-2 border bg-white border-white rounded-md shadow-sm">
            <div className="flex items-start">
                {/* Image Placeholder */}
                <div className="flex-shrink-0">
                    <Skeleton className="h-[120px] w-[120px] rounded bg-gray-200" />
                </div>
                <div className="flex flex-col gap-2 p-4">
                    {/* Category Placeholder */}
                    <Skeleton className="h-4 w-20 rounded bg-gray-200" />

                    {/* Title Placeholder */}
                    <Skeleton className="h-5 w-3/4 rounded bg-gray-200" />

                    {/* Link Placeholder */}
                    <div className="flex items-center gap-2 mt-3">
                        <Skeleton className="h-5 w-24 rounded bg-gray-200" />
                        <Skeleton className="h-4 w-4 rounded-full bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}
