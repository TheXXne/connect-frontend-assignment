import { useEffect, useState } from "react";

const PricingOption = {
    PAID: 0,
    FREE: 1,
    VIEW_ONLY: 2,
}

export const Asset = (props) => {
    console.log("props.input.checkedOption :::", props.input.checkedOption)
    const [assets, setAssets] = useState([])

    const fetchAssetData = () => {
        fetch("https://closet-recruiting-api.azurewebsites.net/api/data")
            .then(response => {
                return response.json()
        })
            .then(data => {
                setAssets(data)
        })
    }
  
    useEffect(() => {
      fetchAssetData()
    }, [])

    const optionFilterdAssets = assets.filter((el) => (props.input.checkedOption.includes(el.pricingOption) || props.input.checkedOption.length === 0))
    
    const keywordFilterdAssets = optionFilterdAssets.filter((el) => {
        if (props.input.keyword === '') {
            return el
        } else {
            return el.creator.toLowerCase().includes(props.input.keyword) || el.title.toLowerCase().includes(props.input.keyword)
        }
    })

    return (
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
    )
}
