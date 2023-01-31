const Simpsons = () => {
    const simpsons = [
        {
            id:'1',
            name:'Homer',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            id:'2',
            name:'Bart',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
        },
        {
            id:'3',
            name:'Marge',
            surname:'Simpson',
            image:'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
    ]
    return (
        <div>
            {
            simpsons.map(simpson=><Simpsons key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons};