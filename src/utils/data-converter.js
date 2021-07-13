export default class DataConverter {
    data = [
        {
            id: 'blog1',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Movies',
            comments: []
        },
        {
            id: 'blog11',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Movies',
            comments: []
        },
        {
            id: 'blog12',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Movies',
            comments: []
        },
        {
            id: 'blog13',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Movies',
            comments: []
        },
        {
            id: 'blog14',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Movies',
            comments: []
        },
        {
            id: 'blog2',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Finance',
            comments: []
        },
        {
            id: 'blog21',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Finance',
            comments: []
        },
        {
            id: 'blog22',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Finance',
            comments: []
        },
        {
            id: 'blog23',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Finance',
            comments: []
        },
        {
            id: 'blog3',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Sports',
            comments: []
        },
        {
            id: 'blog31',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Sports',
            comments: []
        },
        {
            id: 'blog32',
            title: 'This is the first blog',
            shortDescr: 'This is the first blog, this is some content',
            userName: 'Mark',
            category: 'Sports',
            comments: []
        },
        {
            id: 'blog33',
            title: 'This is the first blog',
            shortDescr: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida mauris id tellus egestas, quis ullamcorper metus convallis. Cras pretium auctor dolor eget fringilla. Phasellus vitae commodo dui, sed pharetra nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur quis gravida purus, vel facilisis mi. Nunc rhoncus ornare ipsum at ullamcorper. Donec ac fermentum diam. Nam facilisis erat ut metus luctus, in accumsan enim semper.

            Ut sed justo ac quam mollis luctus. Morbi id tincidunt velit, sit amet pulvinar tellus. Pellentesque aliquam sapien id velit pharetra, consectetur pulvinar massa consectetur. Nullam a ante ac ipsum efficitur volutpat nec at neque. Cras vel facilisis ipsum. Phasellus egestas tortor ac mauris ultrices tempus. Suspendisse arcu augue, eleifend quis pharetra ut, semper at augue. Fusce tincidunt enim sit amet dui vehicula tristique. Quisque semper tortor et nunc vestibulum, sit amet lacinia metus porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida mauris id tellus egestas, quis ullamcorper metus convallis. Cras pretium auctor dolor eget fringilla. Phasellus vitae commodo dui, sed pharetra nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur quis gravida purus, vel facilisis mi. Nunc rhoncus ornare ipsum at ullamcorper. Donec ac fermentum diam. Nam facilisis erat ut metus luctus, in accumsan enim semper.

            Ut sed justo ac quam mollis luctus. Morbi id tincidunt velit, sit amet pulvinar tellus. Pellentesque aliquam sapien id velit pharetra, consectetur pulvinar massa consectetur. Nullam a ante ac ipsum efficitur volutpat nec at neque. Cras vel facilisis ipsum. Phasellus egestas tortor ac mauris ultrices tempus. Suspendisse arcu augue, eleifend quis pharetra ut, semper at augue. Fusce tincidunt enim sit amet dui vehicula tristique. Quisque semper tortor et nunc vestibulum, sit amet lacinia metus porta.`,
            userName: 'Mark',
            category: 'Sports',
            comments: []
        }
    ]

    getTransformedData(){
        return this.data;
    }

    getFilters(){
        let filters = [];
        this.data.forEach(d => {
            if(filters.find(e => e === d.category) == null){
                filters.push(d.category);
            }
        });
        return filters;
    }

    getBlogsById(id){
        return this.data.find(b => b.id === id);
    }
}