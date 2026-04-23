
const SearchLocation = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center items-center shadow-sm bg-background h-14 rounded-2xl w-full">
                <i className="ri-search-line text-lg text-gray-400 flex-shrink-0 p-4" />
                <button
                    onClick={onClick}
                    className="h-full outline-0 w-full cursor-text pr-4 text-sm text-gray-400"
                >Search trashcan...</button>
            </div>
        </div >
    )
}

export default SearchLocation;