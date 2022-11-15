export let ProfilePageData = [
    {
        credentials: {
            default_image: "",
            first_name: "Jordan",
            last_name: "Williams",
            email: "jordanwilliams@gmail.com",
            position: "Teacher",
        },
    },

    {
        office: {
            location: "Room 2092",
            free_time: "4:00 p.m. - 5:00 p.m.",
            phone_number: "+1-202-555-0140",
        },
    },

    {
        biography: {
            content:
                "Jordan Williams is a Software Developer and Teacher having enjoyed his courses to date. He is the creator of Codexpand, a place of learning and growth to help people move into and be successful within the Helping Industry. One of Graham's key driving forces is to remove the barriers to the Helping Industry by producing high quality, accredited courses at affordable prices.",
        },
    },

    {
        education: [
            {
                school: "Cor Jesu College",
                course: "Bachelor of Science in Information Technology",
                field: "Computer Science",
                start_year: "2018",
                end_year: "2019",
            },

            {
                school: "De La Salle University",
                course: "Computer Technology Division",
                field: "Biology",
                start_year: "2014",
                end_year: "2018",
            },
        ],
    },
];

export class ProfilePageService {
    getProfilePageData() {
        return ProfilePageData;
    }

    addNewEducation(new_item) {
        ProfilePageData[3].education.push(new_item);
    }

    removeEducationItemByIndex(item_index) {
        if (item_index > -1) {
            ProfilePageData[3].education.splice(item_index, 1);
        }
    }

    updateEducationItemByIndex(index, updated_product) {
        if (index !== -1) {
            ProfilePageData[3].education.splice(index, 1, updated_product);
        }
    }

    updateBiographyContent(newContent) {
        ProfilePageData[2].biography.content = newContent;
    }

    addBiographyDetails(biography_details) {
        ProfilePageData[2].biography.content = biography_details;
    }

    removeBiographyDetails() {
        ProfilePageData[2].biography.content = "";
    }
}
