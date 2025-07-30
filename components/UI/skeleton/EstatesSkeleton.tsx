import React from "react";

export default function EstatesSkeleton() {
  return (
    <div className="animate-pulse min-h-screen bg-transparent px-4 py-8">
      {/* Filter section skeleton */}
      <div className="mb-8 p-6 rounded-xl bg-gray-300/20 flex flex-col gap-4">
        <div className="h-8 w-1/3 bg-gray-300/40 rounded" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 bg-gray-300/30 rounded" />
          ))}
        </div>
      </div>

      {/* Property cards skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden bg-gray-300/20 shadow-lg flex flex-col">
            <div className="w-full h-48 bg-gray-300/40" />
            <div className="p-4 flex flex-col gap-2">
              <div className="h-6 w-1/2 bg-gray-300/40 rounded" />
              <div className="h-4 w-2/3 bg-gray-300/30 rounded" />
              <div className="h-4 w-1/3 bg-gray-300/30 rounded" />
              <div className="h-4 w-1/4 bg-gray-300/20 rounded mt-2" />
              <div className="flex gap-2 mt-3">
                <div className="h-8 w-20 bg-gray-300/30 rounded" />
                <div className="h-8 w-8 bg-gray-300/30 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
