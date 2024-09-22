export default function useFetch(baseUrl) {
    //Hook to fetch data


        async function get() {
            console.log(baseUrl)
            const response = await fetch(baseUrl);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            } else {
                return data;
            }
        }

        async function post(url, body) {
                const response = await fetch(`${baseUrl}${url}`
                    , {
                        method: "POST",
                        headers : {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(body)
                    });
                    const data = await response.json();
    
                if (!response.ok) {
                    throw new Error(data.message);
                } else {
                    return data;
        
                }
        }
    
        return {get, post};
    }
    