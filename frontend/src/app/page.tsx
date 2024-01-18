"use client";

import { useSampleQuery } from '@/graphql/queries/Sample.queries'

export default function Home() {
  const { data, loading, error } = useSampleQuery({ num: 10, nums: [1, 2, 3] })

  return (
    <main className="flex h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col space-y-4 rounded-lg bg-white p-6 shadow-lg">
        <div className="font-mono text-lg">
          {"square.remote(10) results: "} 
          {loading ? "Loading..." : (data?.square ?? "No data")}
        </div>
        <div className="font-mono text-lg">
          {"square.map([1,2,3]) results: "}
          {loading ? "Loading..." : 
            (data?.squareMap?.map((x) => x).join(", ") ?? "No data")
          }
        </div>
        {/* Display error message if there's an error */}
        {error && (
          <div className="font-mono text-lg text-red-600">
            Error: {error.message}
          </div>
        )}
      </div>
    </main>
  )
}
