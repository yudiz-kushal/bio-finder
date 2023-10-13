import { allBios } from '@shared/api/allBios';
import { shuffleArray } from '@shared/utils';
import { blurImagesFemale, blurImagesMan } from '@shared/utils/images';
import dynamic from 'next/dynamic'

const BioDetail = dynamic(() => import('@shared/components/bioDetail'))

function bioDetail({ initialData }) {
    return (
        <BioDetail seo={{ sTitle: "Bio Detail" }} data={initialData} />
    )
}
export default bioDetail

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