import { useEffect, useState } from 'react';

// Define the correct type for SVG files
interface SvgFile {
    src: string;
    name: string;
}

function DisplaySVG() {
    // Use the correct type in the state
    const [svgs, setSvgs] = useState<SvgFile[]>([]);

    useEffect(() => {
        const importAllSvgs = async () => {
            const svgFiles = import.meta.glob('./assets/*.svg'); // dynamically import all SVGs
            const loadedSvgs = await Promise.all(
                Object.keys(svgFiles).map(async (path) => {
                    const svg = (await svgFiles[path]()) as { default: string }; // Explicitly cast the type
                    return {
                        src: svg.default,
                        name: path.split('/').pop() as string, // Get the file name
                    } as SvgFile; // Ensure it conforms to SvgFile type
                })
            );
            setSvgs(loadedSvgs);
        };

        importAllSvgs();
    }, []);

    return (
        <div className="p-8">
            <h1 className="rounded-md bg-deepBlue text-white p-2 border-darkNavyBlue border-2 text-6xl mb-8 text-center shadow-lg">
                Assets
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                {svgs.map((svg, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transform transition hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={svg.src}
                            alt={`svg-${index}`}
                            className="h-32 w-32 object-contain mb-2"
                        />
                        <p className="text-center text-gray-700 font-semibold">
                            {svg.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { DisplaySVG };
