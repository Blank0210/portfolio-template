import { publication } from "../data/info";

const Publication = () => {
    return (
        <div>
            <h1 className="text-[24px] flex gap-2 font-semibold">
                <span className="text-[#17ebe0] font-extrabold">*</span>publication
            </h1>

            <div className="mt-4 gap-6 flex flex-col w-full">
                <div className="space-y-1 flex w-full flex-col gap-1">
                    <h3 className="text-xl font-medium">
                        {publication.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                        {publication.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Publication;