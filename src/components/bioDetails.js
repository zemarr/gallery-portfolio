import React from 'react'
import bioImg from "../img/Profile-Picture.jpg"
import { StyledBio } from '../styled-components/styledBio'

const BioDetails = () => {
    return (
        <StyledBio>
            <div className="row">
                <div className="col-lg-4">
                    <div className="bio-portrait">
                        <img src={bioImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="bio-content">
                        <h3 className="mb-4">Bio</h3>
                        <p>
                            Oluwatoni “Toni” Campbell is a General Partner of Kinfolk Venture Capital, an Africa-focused fund investing in pre-seed and seed companies led by the continent's next generation of technology entrepreneurs. The firm, headquartered in Lagos, Nigeria, invests in companies and teams that are committed to transforming African markets, solving the continent’s most pertinent issues, and most importantly shifting the global perception of Africa and the black identity.
                        </p>
                        <p>
                            Toni’s dedication to the progression of the African continent stems from his personal experience. Nigerian-born and bred, Toni relocated to the U.S. as a youth, and in his two decades in the country, realized that the ethos of the “American Dream” – which entails building a platform to create one’s own successful path at will – should be accessible to all regardless of nationality, and in particular to the next generation of African entrepreneurs and leaders.
                        </p>
                        <p>
                            Prior to Kinfolk, Toni held roles at investment firms such as Bessemer Venture Partners, where he began his professional career as a venture capital analyst, and Arcadia Funds, a $1.5B specialty credit hedge fund based in Boston where he remains a venture partner.  Through his work as an investor he has worked closely with a broad range of portfolio companies across North America, Western Europe, and Africa including: Raise Marketplace, Social Tables (acquired by Cvent), npm, inc (Acquired by MSFT), Hobnob.io, Kora Money, Eave, Inc (acquired by HomeLight), Drive Sally, Cred Investments, TradeDepot, Dukka, Inc, Bento Labs, Norebase, and Send.ng.
                        </p>
                        <p>
                            Toni is a graduate of Harvard University, earning a BA in Social Studies with a focus in Political Economy from Harvard College and a MBA from the Harvard Business School.
                        </p>
                        <p>
                            When Toni is not working diligently to open doors on behalf of the founders he is privileged to work with, one is  likely to find him either at an art gallery soaking up the latest trends in contemporary African art or on a soccer pitch somewhere hoping to one day fulfill his long-held childhood dream of trying out for the Nigerian National Football team.
                        </p>
                    </div>
                </div>
            </div>
        </StyledBio>
    )
}

export default BioDetails
