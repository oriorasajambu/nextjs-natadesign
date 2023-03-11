import Link from 'next/link';

interface PaginationProps {
    enablePagination: boolean;
    items: number;
    pageSize: number;
    currentPage: number;
    pathName: string;
    previousUrl: string | null;
    nextUrl: string | null;
    pageCount: number;
}

const getPaginationGenerator = (
    currentPageNumber: number,
    totalPageNumber: number,
    offset = 2
): (string | number)[] => {
    // By doing this, when we are close to the beginning or end of the pagination, two numbers are generated after/before the current page, 
    // but when we are far from these points (in the middle of the pagination), we generate only one number after/before the current page.
    const offsetNumber =
        currentPageNumber <= offset || currentPageNumber > totalPageNumber - offset ? offset : offset - 1;
    const numbersList = [];
    const numbersListWithDots: (string | number)[] = [];

    // If itemsPerPage is less than what the user selected with the Select component or if there is no page or only one page:
    if (totalPageNumber <= 1 || totalPageNumber === undefined) return [1];

    // Create list of numbers:
    numbersList.push(1);
    for (let i = currentPageNumber - offsetNumber; i <= currentPageNumber + offsetNumber; i++) {
        if (i < totalPageNumber && i > 1) {
            numbersList.push(i);
        }
    }
    numbersList.push(totalPageNumber);

    // Add three dots to the list of numbers:
    numbersList.reduce((accumulator, currentValue) => {
        if (accumulator === 1) {
            numbersListWithDots.push(accumulator);
        }
        if (currentValue - accumulator !== 1) {
            numbersListWithDots.push('...');
        }
        numbersListWithDots.push(currentValue);

        return currentValue;
    });

    return numbersListWithDots;
};

export default function PaginationComponent({ props }: { props: PaginationProps }) {
    if (!props.enablePagination) return <></>
    const range = getPaginationGenerator(props.currentPage, props.pageCount)
    return (
        <div className='col-span-3 xs:col-span-1 flex flex-row justify-center items-center gap-2'>
            {
                props.previousUrl && (
                    <Link key={'previous'} aria-label='Previous Page'
                        href={{ pathname: props.pathName, query: { page: (props.currentPage - 1) } }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25.144" height="14.382" viewBox="0 0 25.144 14.382">
                            <g id="Group_376" data-name="Group 376" transform="translate(-578.793 -2186.809)">
                                <path id="Path_267" data-name="Path 267" d="M0,6.837,6.837,0l6.837,6.837" transform="translate(579.5 2200.837) rotate(-90)" fill="none" stroke="#404040" stroke-width="1" />
                                <path id="Path_268" data-name="Path 268" d="M1208.8,3931.5h-24.437" transform="translate(1788.301 6125.5) rotate(180)" fill="none" stroke="#404040" stroke-width="1" />
                            </g>
                        </svg>
                    </Link>
                )
            }
            {
                range.map((value, i) => {
                    if (value === '...') return '..'
                    return (
                        <Link key={i} aria-label={`Page Number ${i} `} className={`font-dm-sans font-bold border-2 border-partial px-2 rounded-sm ${value == props.currentPage ? 'bg-primary text-white' : 'bg-[#FFFBF2] text-primary'} `}
                            href={{ pathname: props.pathName, query: { page: value } }}>
                            {value}
                        </Link>
                    )
                })
            }
            {
                props.nextUrl && (
                    <Link key={'next'} scroll={false} aria-label='Next Page'
                        href={{ pathname: props.pathName, query: { page: (props.currentPage + 1) } }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25.144" height="14.382" viewBox="0 0 25.144 14.382">
                            <g id="Group_393" data-name="Group 393" transform="translate(-796.063 -2186.809)">
                                <path id="Path_265" data-name="Path 265" d="M0,6.837,6.837,0l6.837,6.837" transform="translate(820.5 2187.163) rotate(90)" fill="none" stroke="#404040" stroke-width="1" />
                                <path id="Path_266" data-name="Path 266" d="M1208.8,3931.5h-24.437" transform="translate(-388.301 -1737.5)" fill="none" stroke="#404040" stroke-width="1" />
                            </g>
                        </svg>
                    </Link>
                )
            }
        </div>
    )
}
