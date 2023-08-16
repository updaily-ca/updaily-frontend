export const eventType: string[] = [
    "Music festivals", "Christmas markets", "Cultural parades", "Sports events", "Networking events", "Education events", "Concerts", "Comedy shows", "Art exhibitions", "Guided hikes", "Sightseeing tours", "Others"
]

export const businessType: string[] = [
    "Retail and Consumer Goods", "Food and Beverage", "Technology and Software", "Health and Wellness","Financial Services", "Professional Services", "Entertainment and Media", "Beauty and Personal Care", "Others"
]

export const restuarantSubCategories: string[] = [
    "Restaurants and cafes", "Fast food chains", "Food trucks", "Bakeries", "Catering services"
]
export const cuisine: string[] = [
    "Chinese", "French", "Indian", "Italian", "Japanese", "Mexican", "Middle Eastern", "Sushi", "Thai", "Vietnamese"
]

export const admission : string[] = [
    "Free",
    "Per Person", 
    "Per Group"
]

export const generateTime = (): any[] => {
    const times = [];
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 24 * 2; i++) { 
        const time = new Date(startTime.getTime() + i * 30 * 60 * 1000); // Add 30 minutes
        times.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }

    return times;
}
export const times = generateTime();
export const priceRange: string[] = [
    "$", "$$", "$$$", "Others"
]