import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708583400/Malaysia%20Experience/SKYCAB%20LANGKAWI/skycab_2_flcc17.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708583400/Malaysia%20Experience/SKYCAB%20LANGKAWI/skydome_2_u41xgj.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708583403/Malaysia%20Experience/SKYCAB%20LANGKAWI/skyrex_4_kmabw2.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708583252/Malaysia%20Experience/SKYCAB%20LANGKAWI/3d_art_museum_1_ylcitb.jpg"
        ],
        title:"Skycab 4 in 1",
        desc:"Take in mesmerising landscapes of Kuala Lumpur City at the height of 276 meters above the ground with their exclusive binocular service.",
        type:"bookTypeOne",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:27,
                    child:17,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:48,
                    child:28,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017719/Malaysia%20Experience/KL%20Tower/image2-4_ojzcvd.png",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017717/Malaysia%20Experience/KL%20Tower/towerwalk_2_nn5pzd.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017718/Malaysia%20Experience/KL%20Tower/TW2_ncw2wp.jpg",
        ],
        title:"Tower Walk",
        desc:"Feel the thrill of walking 100 feet above the ground, on the edge of the tower with the supervision of the professionals.",
        type:"bookTypeTwo",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:18,
                    child:12,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:32,
                    child:25,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017715/Malaysia%20Experience/KL%20Tower/sbox_z3am32.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017716/Malaysia%20Experience/KL%20Tower/sky_deck_3_wyafkz.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017717/Malaysia%20Experience/KL%20Tower/sky_deck_2_xkyyqc.png",
        ],
        title:"Sky Deck + Sky Box",
        desc:"Located 300 above the ground, they offers unique experience for visitor to enjoy the skyline day and night.",
        type:"bookTypeThree",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:60,
                    child:30,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:79,
                    child:49,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017715/Malaysia%20Experience/KL%20Tower/Observation-Deck_3_inqqw9.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017715/Malaysia%20Experience/KL%20Tower/sbox_2_rpilkp.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1708017717/Malaysia%20Experience/KL%20Tower/sky_deck_2_xkyyqc.png",
        ],
        title:"Combo: Observation Deck + Sky Deck + Sky Box",
        desc:"Hold the admission to Observation Deck, Sky Deck and Sky Box, tourist may enjoy the majestic views of Kuala Lumpur with various spots and heights.",
        type:"bookTypeFour",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:85,
                    child:42,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:115,
                    child:72,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },

    
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1708017713/Malaysia%20Experience/KL%20Tower/OD2_kzvpsd.jpg",
        title:"Observation Deck",
        desc:"From the tower's observation deck, take in breath-taking, all- encompassing views of Kuala Lumpur. It offers a 360-degree panorama of the city, showing the skyline and well-known sites"
    },
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1708017715/Malaysia%20Experience/KL%20Tower/SD1_vzqgv0.jpg",
        title:"Sky Deck",
        desc:"Savor the excitement of being on the open-air platform at a lofty viewpoint, known as the Sky Deck."
    },   
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1708017714/Malaysia%20Experience/KL%20Tower/SB1_r2vnbq.jpg",
        title:"Sky Box",
        desc:"Extending from the Sky Deck, the glass-floored Sky Box awaits the daring. Gazingdown at the city below from this translucent cage is an exhilarating experience."
    },  
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1708017719/Malaysia%20Experience/KL%20Tower/image2-4_ojzcvd.png",
        title:"Tower Walk 100",
        desc:"The KL Tower walk is an adrenaline-pumping activity that involves walking on an open-air ledge encircling the tower at a considerable height."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Skydeck presents the 360° skyline view of the city with breeze in an open-air deck.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1708017716/Malaysia%20Experience/KL%20Tower/sky_deck_3_wyafkz.jpg"
    },
    {
        id: uuidv4(),
        desc:"Feel the adrenaline rush for outdoor activities with walking at the 100 ft above the city with Tower Walk 100.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1708017719/Malaysia%20Experience/KL%20Tower/image2-4_ojzcvd.png"
    },
    {
        id: uuidv4(),
        desc:"For those who want to stay indoors, they offers panoramic views of the metropolitan city from its Observation Deck, which soars 276 meters above the ground",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1708017713/Malaysia%20Experience/KL%20Tower/KL_Tower_Observation_Deck_khzvt1.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "All attraction opens from 9am to 10pm",
            "Opens everyday"
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age 13 and above",
            "Child age 4 to 12 years old",
            "Below 4 years old enter for Free",
            "Senior citizen may purchase at the counter directly",
            "OKU may purchase at the counter directly",
        ]
    },
    {
        id: uuidv4(),
        ques:"Important Information",
        ans:[
            "For Tower Walk 100, minimum height of 120cm is required and must weight between 34kg to 140kg",
            "Customer may refer the counter if unable to proceed with the activity in caseof bad weather",
            "On-site locker is available for Tower Walk 100",
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:[
            "Upon arrival, show your ticket/e-voucher at the counter",
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:[
            "You may use the tickets within 30 days from purchased date."
        ]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Can I bring along my camera inside the tower ?",
        ans:"Yes you may."
    },
    {
        id: uuidv4(),
        ques:"What should I do if it rains ?",
        ans:"You may refer to the counter for advise on ticket extension."
    },
    {
        id: uuidv4(),
        ques:"Can I bring stroller or wheelchair inside the tower ?",
        ans:"Yes you may bring"
    },
    {
        id: uuidv4(),
        ques:"Does my ticket include parking ?",
        ans:"No. Parking is not provided"
    },
    {
        id: uuidv4(),
        ques:"Is there any time slot to enter the attraction ?",
        ans:"No, you may enter any time within the operation hours."
    },
    {
        id: uuidv4(),
        ques:"What is the closest MRT station to the KL Tower ?",
        ans:"Monorail station Bukit Nanas and also Dang Wangi is the closest station. You'll walkroughly 20 minutes to reach the tower."
    },
    {
        id: uuidv4(),
        ques:"Is the KL Tower open everyday ?",
        ans:"Yes. Open everyday from 9am to 10pm."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]


export const publicHolidays = []