'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Prompt } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export const columns: ColumnDef<Prompt>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'title',
    header: 'TITLE'
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION'
  },
  {
    accessorKey: 'category',
    header: 'CATEGORY'
  },
  {
    accessorKey: 'content',
    header: 'CONTENT'
  },
  {
    accessorKey: 'rating',
    header: 'RATING'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
