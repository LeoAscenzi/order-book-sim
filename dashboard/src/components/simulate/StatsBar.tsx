type StatsBarProps = {
    theoreticalRate: number;
    producerRate: number;
    consumerRate: number;
}

const StatsBar = ({theoreticalRate, producerRate, consumerRate} : StatsBarProps) => 
{
    return(
        <div className="grid col-span-8 md:grid-cols-4 grid-cols-8 md:max-w-[45vw] lg:max-w-[40vw] pb-1">
            <div className="grid md:col-span-1 col-span-2">Stats</div>
            {/* Theoretical */}
            <div className="grid md:col-span-1 col-span-2">{theoreticalRate} msg/s</div>
            {/* Producer */}
            <div className="grid md:col-span-1 col-span-2">{producerRate} msg/s</div>
            {/* Consumer */}
            <div className="grid md:col-span-1 col-span-2">{consumerRate} msg/s</div>
        </div>
    )
}
export default StatsBar;