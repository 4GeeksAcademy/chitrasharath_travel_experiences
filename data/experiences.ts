/**
 * Hardcoded travel dataset for Wanderlust.
 *
 * Inspiration sources:
 * - https://pelorustravel.com/us
 * - https://www.blacktomato.com/us/
 * - https://www.sidetracked.com/
 *
 * Titles, descriptions, and highlights below are original placeholder content.
 * The destination choices and travel themes are inspired by the source websites.
 */
import type {
  Experience,
  ExperienceCategory,
  ExperienceSeed,
  SourceSite,
  TravelerType,
} from "@/types/experiences";

const sourceSiteUrls: Record<SourceSite, string> = {
  Pelorus: "https://pelorustravel.com/us",
  "Black Tomato": "https://www.blacktomato.com/us/",
  Sidetracked: "https://www.sidetracked.com/",
};

const durationByCategory: Record<ExperienceCategory, number> = {
  Adventure: 9,
  Culture: 7,
  Food: 6,
  Wellness: 5,
  Nature: 8,
};

const travelerTypesByCategory: Record<ExperienceCategory, TravelerType[]> = {
  Adventure: ["Couples", "Group", "Solo"],
  Culture: ["Couples", "Family", "Solo"],
  Food: ["Couples", "Family", "Group"],
  Wellness: ["Couples", "Solo", "Family"],
  Nature: ["Couples", "Family", "Group"],
};

const destinationSeeds: ExperienceSeed[] = [
  // Pelorus-inspired
  { city: "Bergen", country: "Norway", category: "Nature", sourceSite: "Pelorus", focus: "fjords and island trails", seasonLabel: "May-Sep", price: 14200, rating: 4.9 },
  { city: "Tromso", country: "Norway", category: "Adventure", sourceSite: "Pelorus", focus: "arctic heli routes and whale waters", seasonLabel: "Jan-Apr", price: 19800, rating: 4.9 },
  { city: "Kyoto", country: "Japan", category: "Culture", sourceSite: "Pelorus", focus: "temple rituals and tea houses", seasonLabel: "Mar-May", price: 12900, rating: 4.8 },
  { city: "Niseko", country: "Japan", category: "Adventure", sourceSite: "Pelorus", focus: "powder slopes and onsen evenings", seasonLabel: "Dec-Feb", price: 17400, rating: 4.8 },
  { city: "Cairo", country: "Egypt", category: "Culture", sourceSite: "Pelorus", focus: "desert antiquities and Nile history", seasonLabel: "Oct-Apr", price: 11800, rating: 4.7 },
  { city: "Aswan", country: "Egypt", category: "Nature", sourceSite: "Pelorus", focus: "river islands and desert horizons", seasonLabel: "Nov-Mar", price: 12100, rating: 4.7 },
  { city: "Queenstown", country: "New Zealand", category: "Adventure", sourceSite: "Pelorus", focus: "alpine air land sea circuits", seasonLabel: "Nov-Mar", price: 21300, rating: 4.9 },
  { city: "Rotorua", country: "New Zealand", category: "Nature", sourceSite: "Pelorus", focus: "geothermal forests and lake country", seasonLabel: "Oct-Apr", price: 14800, rating: 4.8 },
  { city: "Cape Town", country: "South Africa", category: "Nature", sourceSite: "Pelorus", focus: "coastline peaks and vineyard valleys", seasonLabel: "Sep-Apr", price: 13700, rating: 4.8 },
  { city: "Madikwe", country: "South Africa", category: "Nature", sourceSite: "Pelorus", focus: "private reserve wildlife days", seasonLabel: "May-Oct", price: 15900, rating: 4.9 },
  { city: "Chiang Mai", country: "Thailand", category: "Culture", sourceSite: "Pelorus", focus: "craft routes and northern temples", seasonLabel: "Nov-Feb", price: 9600, rating: 4.7 },
  { city: "Phuket", country: "Thailand", category: "Wellness", sourceSite: "Pelorus", focus: "island recovery and longboat coves", seasonLabel: "Nov-Apr", price: 11200, rating: 4.6 },
  { city: "Arusha", country: "Tanzania", category: "Nature", sourceSite: "Pelorus", focus: "migration landscapes and safari access", seasonLabel: "Jun-Oct", price: 18600, rating: 4.9 },
  { city: "Zanzibar City", country: "Tanzania", category: "Food", sourceSite: "Pelorus", focus: "spice coast kitchens and dhow harbors", seasonLabel: "Jun-Oct", price: 11400, rating: 4.7 },
  { city: "Nairobi", country: "Kenya", category: "Adventure", sourceSite: "Pelorus", focus: "conservation visits and bush flights", seasonLabel: "Jun-Oct", price: 17100, rating: 4.8 },
  { city: "Nanyuki", country: "Kenya", category: "Nature", sourceSite: "Pelorus", focus: "private conservancy landscapes", seasonLabel: "Jul-Oct", price: 16300, rating: 4.8 },
  { city: "Muscat", country: "Oman", category: "Culture", sourceSite: "Pelorus", focus: "forts souqs and seaside cliffs", seasonLabel: "Oct-Mar", price: 12400, rating: 4.7 },
  { city: "Salalah", country: "Oman", category: "Nature", sourceSite: "Pelorus", focus: "wadis and frankincense valleys", seasonLabel: "Sep-Feb", price: 12800, rating: 4.7 },
  { city: "Thimphu", country: "Bhutan", category: "Wellness", sourceSite: "Pelorus", focus: "monastery stays and mountain stillness", seasonLabel: "Mar-May", price: 15600, rating: 4.9 },
  { city: "Punakha", country: "Bhutan", category: "Culture", sourceSite: "Pelorus", focus: "valley festivals and dzong history", seasonLabel: "Mar-May", price: 14900, rating: 4.8 },
  { city: "Reykjavik", country: "Iceland", category: "Nature", sourceSite: "Pelorus", focus: "lava fields and waterfall drives", seasonLabel: "Jun-Sep", price: 14100, rating: 4.7 },
  { city: "Ilulissat", country: "Greenland", category: "Adventure", sourceSite: "Pelorus", focus: "iceberg voyages and polar skies", seasonLabel: "Jun-Aug", price: 22400, rating: 4.9 },
  { city: "Longyearbyen", country: "Svalbard", category: "Adventure", sourceSite: "Pelorus", focus: "glacial expeditions and midnight sun", seasonLabel: "May-Aug", price: 23600, rating: 4.9 },
  { city: "Ulaanbaatar", country: "Mongolia", category: "Culture", sourceSite: "Pelorus", focus: "nomad camps and open steppe traditions", seasonLabel: "Jun-Sep", price: 13300, rating: 4.7 },
  { city: "Luang Prabang", country: "Laos", category: "Culture", sourceSite: "Pelorus", focus: "river temples and artisan lanes", seasonLabel: "Nov-Feb", price: 9800, rating: 4.7 },
  { city: "Siem Reap", country: "Cambodia", category: "Culture", sourceSite: "Pelorus", focus: "ancient ruins and floating villages", seasonLabel: "Nov-Feb", price: 10200, rating: 4.8 },
  { city: "Jaipur", country: "India", category: "Culture", sourceSite: "Pelorus", focus: "palace courtyards and textile workshops", seasonLabel: "Oct-Mar", price: 10900, rating: 4.7 },
  { city: "Galle", country: "Sri Lanka", category: "Food", sourceSite: "Pelorus", focus: "tea country flavors and coastal feasts", seasonLabel: "Dec-Apr", price: 10600, rating: 4.6 },
  { city: "Paro", country: "Bhutan", category: "Nature", sourceSite: "Pelorus", focus: "Himalayan passes and pine forests", seasonLabel: "Apr-May", price: 16100, rating: 4.9 },
  { city: "Tbilisi", country: "Georgia", category: "Food", sourceSite: "Pelorus", focus: "wine routes and mountain tables", seasonLabel: "May-Oct", price: 10100, rating: 4.7 },
  { city: "Dubrovnik", country: "Croatia", category: "Nature", sourceSite: "Pelorus", focus: "island hopping and limestone cliffs", seasonLabel: "May-Sep", price: 12700, rating: 4.7 },
  { city: "Valletta", country: "Malta", category: "Culture", sourceSite: "Pelorus", focus: "harbor history and hidden courtyards", seasonLabel: "Apr-Jun", price: 9900, rating: 4.6 },
  { city: "Port Vila", country: "Vanuatu", category: "Nature", sourceSite: "Pelorus", focus: "volcanic islands and reef edges", seasonLabel: "May-Oct", price: 18100, rating: 4.8 },
  { city: "Taveuni", country: "Fiji", category: "Wellness", sourceSite: "Pelorus", focus: "rainforest coves and reef reset days", seasonLabel: "May-Oct", price: 16700, rating: 4.8 },
  { city: "Mendoza", country: "Argentina", category: "Food", sourceSite: "Pelorus", focus: "high altitude wine and Andes ranches", seasonLabel: "Oct-Apr", price: 11900, rating: 4.7 },
  { city: "Puerto Varas", country: "Chile", category: "Nature", sourceSite: "Pelorus", focus: "lake reflections and volcano viewpoints", seasonLabel: "Nov-Mar", price: 12600, rating: 4.7 },
  { city: "Maun", country: "Botswana", category: "Nature", sourceSite: "Pelorus", focus: "delta channels and wildlife silence", seasonLabel: "Jun-Oct", price: 20500, rating: 4.9 },
  { city: "Kigali", country: "Rwanda", category: "Culture", sourceSite: "Pelorus", focus: "design cafés and gorilla gateway stops", seasonLabel: "Jun-Sep", price: 14600, rating: 4.8 },
  { city: "Nosy Be", country: "Madagascar", category: "Nature", sourceSite: "Pelorus", focus: "island wildlife and vanilla coastlines", seasonLabel: "Apr-Nov", price: 17200, rating: 4.8 },
  { city: "Male", country: "Maldives", category: "Wellness", sourceSite: "Pelorus", focus: "private atolls and restorative reef days", seasonLabel: "Nov-Apr", price: 18900, rating: 4.8 },

  // Black Tomato-inspired
  { city: "Paris", country: "France", category: "Culture", sourceSite: "Black Tomato", focus: "galleries river nights and design neighborhoods", seasonLabel: "Apr-Jun", price: 11500, rating: 4.7 },
  { city: "Lyon", country: "France", category: "Food", sourceSite: "Black Tomato", focus: "market mornings and bouchon dinners", seasonLabel: "Apr-Oct", price: 9800, rating: 4.7 },
  { city: "Florence", country: "Italy", category: "Culture", sourceSite: "Black Tomato", focus: "artisan studios and renaissance lanes", seasonLabel: "Apr-Jun", price: 10800, rating: 4.8 },
  { city: "Palermo", country: "Italy", category: "Food", sourceSite: "Black Tomato", focus: "street food routes and baroque piazzas", seasonLabel: "Apr-Oct", price: 10100, rating: 4.6 },
  { city: "Marrakech", country: "Morocco", category: "Culture", sourceSite: "Black Tomato", focus: "riads medina color and desert edge escapes", seasonLabel: "Oct-Apr", price: 11200, rating: 4.7 },
  { city: "Essaouira", country: "Morocco", category: "Wellness", sourceSite: "Black Tomato", focus: "Atlantic hammams and surf breeze mornings", seasonLabel: "Apr-Oct", price: 9700, rating: 4.6 },
  { city: "Vik", country: "Iceland", category: "Adventure", sourceSite: "Black Tomato", focus: "black sand drives and glacier detours", seasonLabel: "Jun-Sep", price: 14800, rating: 4.7 },
  { city: "Akureyri", country: "Iceland", category: "Nature", sourceSite: "Black Tomato", focus: "north coast waterfalls and whale bays", seasonLabel: "Jun-Aug", price: 13900, rating: 4.7 },
  { city: "Kanazawa", country: "Japan", category: "Culture", sourceSite: "Black Tomato", focus: "tea districts and garden traditions", seasonLabel: "Mar-May", price: 11400, rating: 4.7 },
  { city: "Tokyo", country: "Japan", category: "Food", sourceSite: "Black Tomato", focus: "omakase counters and neon quarters", seasonLabel: "Mar-May", price: 12600, rating: 4.8 },
  { city: "Oslo", country: "Norway", category: "Culture", sourceSite: "Black Tomato", focus: "fjord design and museum districts", seasonLabel: "May-Sep", price: 11700, rating: 4.6 },
  { city: "Puerto Natales", country: "Chile", category: "Adventure", sourceSite: "Black Tomato", focus: "Patagonian lodges and granite trailheads", seasonLabel: "Nov-Mar", price: 17600, rating: 4.8 },
  { city: "Bariloche", country: "Argentina", category: "Nature", sourceSite: "Black Tomato", focus: "lake country forests and mountain lodges", seasonLabel: "Dec-Mar", price: 12800, rating: 4.7 },
  { city: "Lima", country: "Peru", category: "Food", sourceSite: "Black Tomato", focus: "coastal tasting menus and market kitchens", seasonLabel: "May-Oct", price: 9900, rating: 4.7 },
  { city: "Cusco", country: "Peru", category: "Culture", sourceSite: "Black Tomato", focus: "Inca stonework and sacred valley pacing", seasonLabel: "May-Sep", price: 11600, rating: 4.8 },
  { city: "Bangkok", country: "Thailand", category: "Food", sourceSite: "Black Tomato", focus: "canals rooftop dining and late night markets", seasonLabel: "Nov-Feb", price: 9600, rating: 4.6 },
  { city: "Chiang Rai", country: "Thailand", category: "Culture", sourceSite: "Black Tomato", focus: "temple circuits and tea hill villages", seasonLabel: "Nov-Feb", price: 9300, rating: 4.6 },
  { city: "Vancouver", country: "Canada", category: "Nature", sourceSite: "Black Tomato", focus: "rainforest edges and alpine day escapes", seasonLabel: "Jun-Sep", price: 12200, rating: 4.7 },
  { city: "Quebec City", country: "Canada", category: "Culture", sourceSite: "Black Tomato", focus: "old quarter charm and winter atmosphere", seasonLabel: "Dec-Feb", price: 10400, rating: 4.6 },
  { city: "Moab", country: "United States", category: "Adventure", sourceSite: "Black Tomato", focus: "canyon trails and red rock skies", seasonLabel: "Mar-May", price: 9700, rating: 4.7 },
  { city: "Jackson", country: "United States", category: "Nature", sourceSite: "Black Tomato", focus: "wildlife basins and mountain lodge access", seasonLabel: "Jun-Sep", price: 13300, rating: 4.8 },
  { city: "Santa Fe", country: "United States", category: "Culture", sourceSite: "Black Tomato", focus: "adobe art and desert light", seasonLabel: "Apr-Jun", price: 9500, rating: 4.5 },
  { city: "New Orleans", country: "United States", category: "Food", sourceSite: "Black Tomato", focus: "jazz evenings and creole kitchens", seasonLabel: "Feb-Apr", price: 8900, rating: 4.7 },
  { city: "Edinburgh", country: "Scotland", category: "Culture", sourceSite: "Black Tomato", focus: "old town stories and whisky rooms", seasonLabel: "May-Sep", price: 10900, rating: 4.6 },
  { city: "Porto", country: "Portugal", category: "Food", sourceSite: "Black Tomato", focus: "riverfront cellars and tiled backstreets", seasonLabel: "Apr-Oct", price: 9800, rating: 4.7 },
  { city: "Seville", country: "Spain", category: "Culture", sourceSite: "Black Tomato", focus: "flamenco patios and moorish arches", seasonLabel: "Mar-May", price: 10100, rating: 4.6 },
  { city: "Athens", country: "Greece", category: "Culture", sourceSite: "Black Tomato", focus: "ancient landmarks and neighborhood tavernas", seasonLabel: "Apr-Jun", price: 10500, rating: 4.6 },
  { city: "Kotor", country: "Montenegro", category: "Nature", sourceSite: "Black Tomato", focus: "bay inlets and stone village outlooks", seasonLabel: "May-Sep", price: 10300, rating: 4.6 },
  { city: "Galway", country: "Ireland", category: "Culture", sourceSite: "Black Tomato", focus: "Atlantic storytelling and pub music nights", seasonLabel: "May-Sep", price: 9900, rating: 4.5 },
  { city: "Zermatt", country: "Switzerland", category: "Nature", sourceSite: "Black Tomato", focus: "alpine rail journeys and glacier views", seasonLabel: "Dec-Mar", price: 14900, rating: 4.8 },
  { city: "Wanaka", country: "New Zealand", category: "Adventure", sourceSite: "Black Tomato", focus: "lakeside trail flights and summit days", seasonLabel: "Nov-Mar", price: 16400, rating: 4.8 },
  { city: "Ubud", country: "Indonesia", category: "Wellness", sourceSite: "Black Tomato", focus: "rice terraces and restorative rituals", seasonLabel: "Apr-Oct", price: 9900, rating: 4.7 },
  { city: "Yogyakarta", country: "Indonesia", category: "Culture", sourceSite: "Black Tomato", focus: "volcanic temples and batik workshops", seasonLabel: "May-Sep", price: 9400, rating: 4.6 },
  { city: "Cartagena", country: "Colombia", category: "Food", sourceSite: "Black Tomato", focus: "Caribbean courtyards and tasting routes", seasonLabel: "Dec-Apr", price: 9700, rating: 4.6 },
  { city: "Panajachel", country: "Guatemala", category: "Wellness", sourceSite: "Black Tomato", focus: "volcano views and lakeside calm", seasonLabel: "Nov-Apr", price: 9200, rating: 4.5 },
  { city: "Oia", country: "Greece", category: "Wellness", sourceSite: "Black Tomato", focus: "sunset terraces and slow island pacing", seasonLabel: "May-Sep", price: 13100, rating: 4.7 },

  // Sidetracked-inspired
  { city: "El Chalten", country: "Argentina", category: "Adventure", sourceSite: "Sidetracked", focus: "granite trails and packrafting days", seasonLabel: "Nov-Mar", price: 15100, rating: 4.8 },
  { city: "Puerto Williams", country: "Chile", category: "Nature", sourceSite: "Sidetracked", focus: "subantarctic fjords and trekking routes", seasonLabel: "Dec-Feb", price: 16900, rating: 4.8 },
  { city: "Sisimiut", country: "Greenland", category: "Adventure", sourceSite: "Sidetracked", focus: "Arctic coast ski touring and sled paths", seasonLabel: "Feb-Apr", price: 21800, rating: 4.9 },
  { city: "Huaraz", country: "Peru", category: "Adventure", sourceSite: "Sidetracked", focus: "high cordillera ascents and glacial lakes", seasonLabel: "May-Sep", price: 11200, rating: 4.7 },
  { city: "Pokhara", country: "Nepal", category: "Adventure", sourceSite: "Sidetracked", focus: "paraglider launches and Annapurna trails", seasonLabel: "Oct-Nov", price: 10900, rating: 4.8 },
  { city: "Namche Bazaar", country: "Nepal", category: "Culture", sourceSite: "Sidetracked", focus: "Sherpa villages and suspension bridge routes", seasonLabel: "Oct-Nov", price: 11600, rating: 4.8 },
  { city: "Leh", country: "India", category: "Adventure", sourceSite: "Sidetracked", focus: "high passes and desert monasteries", seasonLabel: "Jun-Sep", price: 12400, rating: 4.8 },
  { city: "Probolinggo", country: "Indonesia", category: "Nature", sourceSite: "Sidetracked", focus: "volcanic dawn ridges and crater plains", seasonLabel: "May-Sep", price: 9800, rating: 4.6 },
  { city: "Ait Benhaddou", country: "Morocco", category: "Culture", sourceSite: "Sidetracked", focus: "caravan routes and kasbah lanes", seasonLabel: "Oct-Apr", price: 10100, rating: 4.6 },
  { city: "Wadi Rum", country: "Jordan", category: "Adventure", sourceSite: "Sidetracked", focus: "sandstone camps and canyon scrambling", seasonLabel: "Oct-Apr", price: 11800, rating: 4.7 },
  { city: "Aqaba", country: "Jordan", category: "Nature", sourceSite: "Sidetracked", focus: "Red Sea reefs and desert contrast", seasonLabel: "Mar-May", price: 9600, rating: 4.5 },
  { city: "Alice Springs", country: "Australia", category: "Adventure", sourceSite: "Sidetracked", focus: "desert overland routes and remote ridgelines", seasonLabel: "May-Sep", price: 14600, rating: 4.7 },
  { city: "Hobart", country: "Australia", category: "Nature", sourceSite: "Sidetracked", focus: "wild coasts and island hikes", seasonLabel: "Nov-Mar", price: 12100, rating: 4.6 },
  { city: "Aoraki Village", country: "New Zealand", category: "Nature", sourceSite: "Sidetracked", focus: "glacier basins and starry nights", seasonLabel: "Nov-Mar", price: 13800, rating: 4.8 },
  { city: "Svolvaer", country: "Norway", category: "Adventure", sourceSite: "Sidetracked", focus: "sea kayaking and winter peaks", seasonLabel: "Jun-Aug", price: 14900, rating: 4.7 },
  { city: "Torshavn", country: "Faroe Islands", category: "Nature", sourceSite: "Sidetracked", focus: "sea cliffs and turf roof settlements", seasonLabel: "May-Sep", price: 13200, rating: 4.7 },
  { city: "Rovaniemi", country: "Finland", category: "Wellness", sourceSite: "Sidetracked", focus: "sauna forests and aurora stillness", seasonLabel: "Dec-Mar", price: 12700, rating: 4.7 },
  { city: "Kilpisjarvi", country: "Finland", category: "Nature", sourceSite: "Sidetracked", focus: "tundra lakes and northern light horizons", seasonLabel: "Jan-Mar", price: 13500, rating: 4.7 },
  { city: "Bovec", country: "Slovenia", category: "Adventure", sourceSite: "Sidetracked", focus: "whitewater and alpine meadow routes", seasonLabel: "May-Sep", price: 9800, rating: 4.6 },
  { city: "Brasov", country: "Romania", category: "Culture", sourceSite: "Sidetracked", focus: "Carpathian villages and mountain roads", seasonLabel: "May-Oct", price: 9100, rating: 4.5 },
  { city: "Kalambaka", country: "Greece", category: "Nature", sourceSite: "Sidetracked", focus: "cliff monasteries and stone pillars", seasonLabel: "Apr-Jun", price: 9900, rating: 4.6 },
  { city: "Mestia", country: "Georgia", category: "Adventure", sourceSite: "Sidetracked", focus: "mountain towers and glacier trails", seasonLabel: "Jun-Sep", price: 10800, rating: 4.7 },
  { city: "Almaty", country: "Kazakhstan", category: "Culture", sourceSite: "Sidetracked", focus: "steppe city rhythm and alpine daybreaks", seasonLabel: "May-Sep", price: 10200, rating: 4.5 },
  { city: "Bishkek", country: "Kyrgyzstan", category: "Adventure", sourceSite: "Sidetracked", focus: "horse trails and high jailoos", seasonLabel: "Jun-Sep", price: 10400, rating: 4.7 },
  { city: "Dushanbe", country: "Tajikistan", category: "Nature", sourceSite: "Sidetracked", focus: "Pamir routes and high plateaus", seasonLabel: "Jun-Sep", price: 11100, rating: 4.6 },
  { city: "Samarkand", country: "Uzbekistan", category: "Culture", sourceSite: "Sidetracked", focus: "blue domes and silk road courtyards", seasonLabel: "Apr-May", price: 9800, rating: 4.6 },
  { city: "Ashgabat", country: "Turkmenistan", category: "Culture", sourceSite: "Sidetracked", focus: "desert monuments and caravan echoes", seasonLabel: "Apr-May", price: 10900, rating: 4.4 },
  { city: "Luang Namtha", country: "Laos", category: "Nature", sourceSite: "Sidetracked", focus: "jungle rivers and village trails", seasonLabel: "Nov-Feb", price: 9400, rating: 4.5 },
  { city: "Sandakan", country: "Malaysia", category: "Nature", sourceSite: "Sidetracked", focus: "river wildlife and rainforest lodges", seasonLabel: "Mar-Oct", price: 9700, rating: 4.6 },
  { city: "Placencia", country: "Belize", category: "Nature", sourceSite: "Sidetracked", focus: "barrier reef access and jungle day trips", seasonLabel: "Dec-Apr", price: 10100, rating: 4.6 },
  { city: "Boquete", country: "Panama", category: "Nature", sourceSite: "Sidetracked", focus: "cloud forest hikes and coffee highlands", seasonLabel: "Dec-Apr", price: 9300, rating: 4.5 },
  { city: "La Fortuna", country: "Costa Rica", category: "Nature", sourceSite: "Sidetracked", focus: "volcano slopes and canopy walks", seasonLabel: "Dec-Apr", price: 9900, rating: 4.7 },
  { city: "Antigua", country: "Guatemala", category: "Culture", sourceSite: "Sidetracked", focus: "colonial plazas and volcano silhouettes", seasonLabel: "Nov-Apr", price: 9200, rating: 4.5 },
  { city: "San Pedro de Atacama", country: "Chile", category: "Adventure", sourceSite: "Sidetracked", focus: "salt flats and night sky drives", seasonLabel: "Mar-May", price: 13200, rating: 4.7 },
  { city: "Punta Arenas", country: "Chile", category: "Nature", sourceSite: "Sidetracked", focus: "Patagonian winds and strait journeys", seasonLabel: "Nov-Mar", price: 12500, rating: 4.6 },
  { city: "Iquitos", country: "Peru", category: "Nature", sourceSite: "Sidetracked", focus: "Amazon waterways and jungle dawns", seasonLabel: "Jun-Oct", price: 11300, rating: 4.7 },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getTitle = (seed: ExperienceSeed) => {
  if (seed.sourceSite === "Pelorus") {
    switch (seed.category) {
      case "Adventure":
        return `${seed.city} Beyond Boundaries`;
      case "Culture":
        return `${seed.city} Unscripted`;
      case "Food":
        return `Taste Routes of ${seed.city}`;
      case "Wellness":
        return `${seed.city} Reset`;
      case "Nature":
        return `Wild ${seed.city}`;
    }
  }

  if (seed.sourceSite === "Black Tomato") {
    switch (seed.category) {
      case "Adventure":
        return `Feel the Pace of ${seed.city}`;
      case "Culture":
        return `Stories Through ${seed.city}`;
      case "Food":
        return `${seed.city} After Dark and At Table`;
      case "Wellness":
        return `Slow Time in ${seed.city}`;
      case "Nature":
        return `${seed.city} in the Elements`;
    }
  }

  switch (seed.category) {
    case "Adventure":
      return `${seed.city}: Expedition Notes`;
    case "Culture":
      return `${seed.city}: Roads Rituals Routes`;
    case "Food":
      return `${seed.city}: Trailside Tastes`;
    case "Wellness":
      return `${seed.city}: Recovery Window`;
    case "Nature":
      return `${seed.city}: Wild Horizons`;
  }
};

const getDescription = (seed: ExperienceSeed) => {
  const destination = `${seed.city}, ${seed.country}`;
  const sourceTone: Record<SourceSite, string> = {
    Pelorus:
      "Shared by someone who loved balancing remote access with meaningful local moments.",
    "Black Tomato":
      "Written with a strong sense of mood, pace, and small details that make a trip memorable.",
    Sidetracked:
      "Told from an expedition mindset with open landscapes and active days outdoors.",
  };

  return `I shared this ${seed.category.toLowerCase()} experience in ${destination} around ${seed.focus}. ${sourceTone[seed.sourceSite]} It blends guided moments, flexible free time, and local recommendations that felt genuinely personal.`;
};

const getHighlights = (seed: ExperienceSeed) => [
  `Focused on ${seed.focus}`,
  `Best experienced during ${seed.seasonLabel}`,
  `${seed.sourceSite}-inspired pacing and atmosphere`,
];

export const experiences: Experience[] = destinationSeeds.map((seed, index) => {
  const id = `exp-${String(index + 1).padStart(3, "0")}`;
  const destination = `${seed.city}, ${seed.country}`;
  const slug = slugify(`${seed.city}-${seed.country}-${seed.category}-${index + 1}`);

  return {
    id,
    slug,
    title: getTitle(seed),
    description: getDescription(seed),
    category: seed.category,
    destination,
    city: seed.city,
    country: seed.country,
    price: seed.price,
    priceCurrency: "USD",
    rating: seed.rating,
    imageUrl: `https://picsum.photos/seed/${slug}/1200/800`,
    heroImageUrl: `https://picsum.photos/seed/${slug}-hero/1600/1000`,
    seasonLabel: seed.seasonLabel,
    durationDays: durationByCategory[seed.category],
    sourceSite: seed.sourceSite,
    sourceSiteUrl: sourceSiteUrls[seed.sourceSite],
    travelerTypes: travelerTypesByCategory[seed.category],
    highlights: getHighlights(seed),
    featured: index < 12,
  };
});

export const experienceCategories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

export const destinationOptions = Array.from(
  new Set(experiences.map((experience) => experience.destination)),
).sort((a, b) => a.localeCompare(b));

export default experiences;
