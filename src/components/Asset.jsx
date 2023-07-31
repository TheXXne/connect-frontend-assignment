import { useEffect, useState } from "react";

const PricingOption = {
    PAID: 0,
    FREE: 1,
    VIEW_ONLY: 2,
}

export const Asset = (props) => {
    const [assets, setAssets] = useState([])
    const [pageCount, setPageCount] = useState(1);
    const [fetching, setFetching] = useState(false);

    const numToLoad = 12
   
    const fetchAssetData = async () => {
        await fetch("https://closet-recruiting-api.azurewebsites.net/api/data")
            .then(response => {
                return response.json()
        })
            .then(data => {
                setAssets(data.slice(0 * pageCount, numToLoad * pageCount))
        })
    }
    useEffect(() => {
        fetchAssetData()
    },)
   
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (fetching === false && scrollTop + clientHeight >= scrollHeight) {
            setFetching(true);
            fetchAssetData();
            setPageCount(pageCount + 1);
            setFetching(false);
        }
    };
   
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    
    const optionFilterdAssets = assets.filter((el) => (props.input.checkedOption.includes(el.pricingOption) || props.input.checkedOption.length === 0))
    
    const keywordFilterdAssets = optionFilterdAssets.filter((el) => {
        if (props.input.keyword === '') {
            return el
        } else {
            return el.creator.toLowerCase().includes(props.input.keyword) || el.title.toLowerCase().includes(props.input.keyword)
        }
    })

    return (
        <div>
            <div className="buffer">{keywordFilterdAssets.length} items</div>
            <div className="asset-container">
                {
                    keywordFilterdAssets.map((asset) => (
                        <div className="asset-card" key={asset.id}>
                            <img src={asset.imagePath} alt="Asset" />
                            <div className="asset-info">
                                <div className="creator-title">
                                    <h4>{asset.creator}</h4>
                                    <h4>{asset.title}</h4>
                                </div>
                                <span className="asset-option">{
                                    (asset.pricingOption === PricingOption.PAID) ? '$'+asset.price : (asset.pricingOption === 1) ? 'FREE' : 'VIEW ONLY'}
                                </span>
                            </div>    
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
