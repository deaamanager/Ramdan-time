import React from 'react'

type Props = {}

export default function jordan({}: Props) {
  return (
    <div className='absolute top-0 '>
      <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Prayer Time
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Time
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Fajr
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            time
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Sunrise
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            titime
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Dhuhr
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            time
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Asr
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          time
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Sunset
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ttime
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Maghrib
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            titime
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Isha
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            time
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Imsak
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            time
          </td>
        </tr>
        </tbody>
        </table>
    </div>
  )
}