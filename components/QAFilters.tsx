"use client";

export default function QAFilters() {
  return (
    <div className="flex flex-wrap gap-4 mb-10 justify-center">
      <select className="bg-neutral-900 border border-gray-700 px-4 py-2 rounded">
        <option>All Teams</option>
        <option>Payments</option>
        <option>Checkout</option>
        <option>Search</option>
      </select>

      <select className="bg-neutral-900 border border-gray-700 px-4 py-2 rounded">
        <option>Last 30 Days</option>
        <option>Last Quarter</option>
        <option>Last Year</option>
      </select>

      <select className="bg-neutral-900 border border-gray-700 px-4 py-2 rounded">
        <option>All Releases</option>
        <option>v3.1</option>
        <option>v3.2</option>
      </select>
    </div>
  );
}