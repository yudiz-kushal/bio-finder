import { allBios } from '@shared/api/allBios';
import { shuffleArray } from '@shared/utils';
import { blurImagesFemale, blurImagesMan } from '@shared/utils/images';
import dynamic from 'next/dynamic'

import { useRouter } from 'next/router';

const BioList = dynamic(() => import('@shared/components/bioList'))

function bios({ initialData, params }) {
    const router = useRouter()

    return (
        <BioList seo={{ sTitle: "Tinder Bio" }} data={initialData} />
    )
}
export default bios

export async function getServerSideProps() {
    try {
        const response = await allBios({
            size: 6,
            pageNumber: 1,
            type: "aboutme_text",
            platFormType: "tinder"
        });

        const shuffledManImages = shuffleArray(blurImagesMan);
        const shuffledFemaleImages = shuffleArray(blurImagesFemale);

        const combinedImages = response?.data?.data?.ans?.map((item, i) => {
            const gender = item?.sGender;
            const imageArray = gender === '2' ? shuffledFemaleImages : shuffledManImages;
            const selectedImage = imageArray[i % imageArray.length];
            return { ...item, image: selectedImage };
        });
        return {
            props: {
                initialData: combinedImages,
            },
        };
    } catch (error) {
        console.error('Error fetching initial data:', error);
        return {
            props: {
                initialData: [],
            },
        };
    }
}