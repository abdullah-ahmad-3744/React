import "./Card.css"
function Card() {

    let data = [
        {
            "city": "Paris",
            "description": "Explore the romantic city of Paris with iconic sights like the Eiffel Tower, Louvre Museum, and charming cafes.",
            "price": "$799",
            "image": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
        },
        {
            "city": "Tokyo",
            "description": "Experience Tokyo’s futuristic skyline, traditional temples, anime culture, and world-famous cuisine.",
            "price": "$999",
            "image": "https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
        },
        {
            "city": "New York",
            "description": "Visit Times Square, Central Park, the Statue of Liberty, and immerse yourself in the city that never sleeps.",
            "price": "$899",
            "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
        },
        {
            "city": "Dubai",
            "description": "Enjoy luxury shopping, desert adventures, modern architecture, and breathtaking skylines.",
            "price": "$1099",
            "image": "https://images.unsplash.com/photo-1504274066651-8d31a536b11a"
        },
        {
            "city": "Istanbul",
            "description": "Discover the cultural bridge between Europe and Asia with mosques, bazaars, and rich heritage.",
            "price": "$699",
            "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        },
        {
            "city": "London",
            "description": "Explore Big Ben, the London Eye, royal palaces, and the dynamic blend of old and modern architecture.",
            "price": "$850",
            "image": "https://images.unsplash.com/photo-1473959383410-dc52a3f1d8f8"
        },
        {
            "city": "Sydney",
            "description": "Visit the Sydney Opera House, enjoy beaches, wildlife parks, and the beautiful harbor city.",
            "price": "$1199",
            "image": "https://images.unsplash.com/photo-1506976785307-8732e854ad03"
        },
        {
            "city": "Rome",
            "description": "Walk through ancient history with the Colosseum, Roman Forum, and stunning Italian architecture.",
            "price": "$750",
            "image": "https://images.unsplash.com/photo-1526481280695-3c720685208b"
        },
        {
            "city": "Cairo",
            "description": "Experience the Pyramids of Giza, ancient Egyptian museums, and vibrant local markets.",
            "price": "$650",
            "image": "https://images.unsplash.com/photo-1505735457224-4f5f1a10e05f"
        },
        {
            "city": "Bangkok",
            "description": "Explore floating markets, golden temples, delicious street food, and the lively nightlife.",
            "price": "$599",
            "image": "https://images.unsplash.com/photo-1506972785302-d00f658d06cc"
        },
        {
            "city": "Barcelona",
            "description": "Enjoy Gaudí’s masterpieces, sunny beaches, football culture, and vibrant street life.",
            "price": "$780",
            "image": "https://images.unsplash.com/photo-1493558103817-58b2924bce98"
        },
        {
            "city": "Toronto",
            "description": "Visit the CN Tower, explore multicultural neighborhoods, and enjoy lakeside attractions.",
            "price": "$920",
            "image": "https://images.unsplash.com/photo-1503264116251-35a269479413"
        },
        {
            "city": "Singapore",
            "description": "Experience clean streets, futuristic gardens, luxury shopping, and an unforgettable skyline.",
            "price": "$1050",
            "image": "https://images.unsplash.com/photo-1505428212305-222f2f3e3e52"
        },
        {
            "city": "Berlin",
            "description": "Discover rich WWII history, modern art, vibrant nightlife, and iconic landmarks.",
            "price": "$840",
            "image": "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
        },
        {
            "city": "Bali",
            "description": "Relax on tropical beaches, visit temples, experience nature, and enjoy peaceful island vibes.",
            "price": "$680",
            "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        }
    ]



    
    return (
        <>
        {data.map( (data) => {
            return (
                <div className="card">
                        <img src={data.image} alt="" />
                        <h3>{data.price}</h3>
                        <h3>{data.city}</h3>
                        <p>{data.description}</p>
                        <button>Not Interested</button>
                    </div>
            )
        })}
        </>
        
    )
}
export default Card;