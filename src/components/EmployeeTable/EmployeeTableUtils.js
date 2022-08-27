// SEARCHING IN DATA 
export const filter = (data, query) => {
    return data.filter(employee =>
        // FILTERING DATA BASED ON FIRST NAME
        employee.first_name.toLowerCase().includes(query) ||
        // FILTERING DATA BASED ON LAST NAME
        employee.last_name.toLowerCase().includes(query) ||
        // FILTERING DATA BASED ON ID
        employee.id.toLowerCase().includes(query) ||
        // FILTERING DATA BASED ON DATE OF BIRTH
        employee.date_of_birth.toLowerCase().includes(query) ||
        // FILTERING DATA BASED ON ADDRESS
        employee.address.toLowerCase().includes(query) ||
        // FILTERING DATA BASED ON DATE OF JOINING
        employee.date_of_joining.toLowerCase().includes(query) ||
        // FILTERING DATA BASED ON SALARY
        employee.salary.toLowerCase().includes(query) ||
        // FILTERING DATA BASED ON DESIGNATION
        employee.designation.toLowerCase().includes(query)
    )
}

export const sort_data = (feild, sort, data) => {

    if (feild === '') {
        return data
    }

    let sortedData; // TO STORE SORTED DATA

    // TO PREPARE DATES
    function prepareDate(date) {
        const [d, m, y] = date.split("-"); //SPLIT THE STRING
        return [y, m - 1, d]; //RETURN AS AN ARRAY OF Y,M,D
    }

    switch (feild) {
        // TO ARRANGE DATA IN ASCENDING OR DESCENDING ORDER ACCORDING TO SALARY
        case 'salary':
            sortedData = [...data].sort((a, b) => {
                const firstParam = Number(a['salary'].replace(/,/g, ''))
                const secondParam = Number(b['salary'].replace(/,/g, ''))
                return firstParam - secondParam
            })
            break;

        // TO ARRANGE DATA IN ASCENDING OR DESCENDING ORDER ACCORDING TO DATE OF JOINING
        case 'date_of_joining':
            sortedData = [...data].sort((a, b) => {
                // FORMAT DATES
                const formatFirstDate = a['date_of_joining'].replace(/\//g, '-')
                const formatSecondDate = b['date_of_joining'].replace(/\//g, '-')

                // GET DATES IN MILISECONDS
                const firstParam = new Date(...prepareDate(formatFirstDate)).getTime()
                const secondParam = new Date(...prepareDate(formatSecondDate)).getTime()

                return firstParam - secondParam
            })
            break;

        // TO ARRANGE DATA IN ASCENDING OR DESCENDING ORDER ACCORDING TO DATE OF BIRTH
        case 'date_of_birth':
            sortedData = [...data].sort((a, b) => {
                // FORMAT DATES
                const formatFirstDate = a['date_of_birth'].replace(/\//g, '-')
                const formatSecondDate = b['date_of_birth'].replace(/\//g, '-')

                // GET DATES IN MILISECONDS
                const firstParam = new Date(...prepareDate(formatFirstDate)).getTime()
                const secondParam = new Date(...prepareDate(formatSecondDate)).getTime()

                return firstParam - secondParam
            })
            break;

        default:
            sortedData = [...data].sort()
            break;
    }

    if (sort === 'ascending') {
        data = sortedData
    }
    else if (sort === 'descending') {
        data = sortedData.reverse()
    }

    return data
}