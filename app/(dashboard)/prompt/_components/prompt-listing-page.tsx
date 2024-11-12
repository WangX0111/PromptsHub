import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Prompt } from '@/constants/data';
import { fakeUsers } from '@/constants/mock-api';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import PromptTable from './prompt-tables';

type TPromptListingPage = {};

export default async function PromptListingPage({}: TPromptListingPage) {
  // Showcasing the use of search params cache in nested RSCs
//   const page = searchParamsCache.get('page');
//   const search = searchParamsCache.get('q');
//   const gender = searchParamsCache.get('gender');
//   const pageLimit = searchParamsCache.get('limit');

//   const filters = {
//     page,
//     limit: pageLimit,
//     ...(search && { search }),
//     ...(gender && { genders: gender })
//   };
  const filters = {};
  // mock api call
  const data = await fakeUsers.getUsers(filters);
  const totalUsers = data.total_users;
  const prompt: Prompt[] = data.users;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Prompt (${totalUsers})`}
            description="Manage prompts (Server side table functionalities.)"
          />

          <Link
            href={'/dashboard/prompt/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <PromptTable data={prompt} totalData={totalUsers} />
      </div>
    </PageContainer>
  );
}
