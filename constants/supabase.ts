import { createClient } from '@/lib/supabase';
import { Prompt } from '@/constants/data';


export const prompts = {
    records: [] as Prompt[],

    async getAll({
        categories,
    }: {
        categories?: string[];
    }) {        
        const supabase = await createClient();
        const { data, error } = await supabase
            .from('prompts')
            .select('*')
            .order('created_at', { ascending: false });
        if (error) {
            console.error('Error fetching prompts:', error);
            return [];
        }
        this.records = data as Prompt[];
        return this.records;
    },

    async getPrompts({
        page = 1,   
        limit = 10,
        categories,
    }: {
        page?: number;
        limit?: number;
        categories?: string;
    }) {
        const categoriesArray = categories ? categories.split('.') : [];

        const allPrompts = await this.getAll({
            categories: categoriesArray,
        });

        const totalPrompts = allPrompts.length;

        const offset = (page - 1) * limit;
        const paginatedPrompts = allPrompts.slice(offset, offset + limit);

        return {
            prompts: paginatedPrompts,
            totalPrompts
        };
    },
};
