import Papa from 'papaparse';
type Callback = (data: any) => void;
type DepartmentData = {
    department: string;
    quote: string;
    explain: string;
};
const useFetch = () => {
    const fetchCsvData = async (filePath: string, department: string, callback: Callback) => {
        try {
            const response = await fetch(filePath)
            const reader = response.body!.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder('utf-8');
            const csvString = decoder.decode(result.value!);

            const { data } = Papa.parse(csvString, {
                header: true,
                dynamicTyping: true
            });
            const departmentData = (data as DepartmentData[]).find((item) => item.department === department);
            if (departmentData) {
                callback(departmentData);
            } else {
                console.error('Department not found:', department);
                callback(null); // Call callback with null if not found
            }
        } catch (error) {
            console.error('Error fetching CSV data:', error);
        }
        
    };
    
    return { fetchCsvData };
};

export default useFetch