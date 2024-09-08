import Graph from "../components/Graph"

const GraphDashboard = () => {
    return (
        <div className="graph page">
          <div className="graphs">
            <div className="graph-realtime">
              <h3>Real-Time Demand vs Supply</h3>
              <Graph />
            </div>
            <div className="graph-forecast">
              <h3>Forecasted Demand and Generation</h3>
            </div>
          </div>
          
        </div>
      )
}

export default GraphDashboard
