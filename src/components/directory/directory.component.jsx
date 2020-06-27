import React from 'react';
import './directory.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';

export class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id:1,
                    title: 'Hats',
                    img: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2534&q=80',
                    linkUrl: 'hats'
                },
                {
                    id:2,
                    title: 'Jackets',
                    img: 'https://images.unsplash.com/photo-1545594861-3bef43ff2fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    linkUrl: 'jackets'
                },
                {
                    id:3,
                    title: 'Trousers',
                    img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                    linkUrl: 'trousers'
                },
                {
                    id:4,
                    title: 'Bags',
                    img: 'https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
                    size: 'large',
                    linkUrl: 'bags'
                },
                {
                    id:5,
                    title: 'Jewelery',
                    img: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    size: 'large',
                    linkUrl: 'jewlery'
                }
            ]
        }

    }

    render () {
        return (
            <div className="directory-menu">
                { this.state.sections.map( section => {
                    return <MenuItem key={section.id} title={section.title} image={section.img} size={section.size} link={section.linkUrl}/>
                })}
            </div>
        )
    }
}