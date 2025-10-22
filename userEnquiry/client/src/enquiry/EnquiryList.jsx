import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const EnquiryList = () => {
   return(
        <div className="bg-gray-200 p-4">
          <h2 className="text-[20px] font-bold mb-4">Enquiry List</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Sr No.</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>
                  <TableHeadCell>Phone</TableHeadCell>
                  <TableHeadCell>Message</TableHeadCell>

                  <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                   <TableHeadCell>
                    <span className="sr-only">Delete</span>
                  </TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                   1.
                  </TableCell>
                  <TableCell>Joe</TableCell>
                  <TableCell>joe@gmail.com</TableCell>
                  <TableCell>435678875879</TableCell>
                  <TableCell>Hello Developers</TableCell> 
                  
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                   
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Delete
                    </a>
                  </TableCell>
                </TableRow>
                
              </TableBody>
            </Table>
          </div>
        </div>
  )
}

export default EnquiryList
