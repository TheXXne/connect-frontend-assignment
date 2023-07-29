import { useEffect, useState } from "react";

// export enum PricingOption {
//     PAID = 0,
//     FREE = 1,
//     VIEW_ONLY = 2,
// }

export const Asset = (props) => {
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

    const filteredAsset = assets.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.creator.toLowerCase().includes(props.input) || el.title.toLowerCase().includes(props.input)
        }
    })

    return (
        <div>
            {
                filteredAsset.map((asset) => (
                    <div className="asset-container" key={asset.id}>
                        <img src={asset.imagePath} alt="Asset" />
                        <div className="asset-info">
                            <h4>{asset.creator}</h4>
                            <h4>{asset.title}</h4>
                            <span>{asset.price}</span>
                        </div>    
                    </div>
                ))
            }
        </div>
    )
}
