import { Tabs } from "antd";

const { TabPane } = Tabs;

const tabKeys = {
  Streams: "stream",
  Videos: "videos",
  Clips: "clips",
};

const Home = ({ resources, loggedIn, favoriteItems }) => {
  const { videos, streams, clips } = resources;
  const {
    videos: favVideos,
    streams: favStreams,
    clips: favClips,
  } = favoriteItems;

  return (
    <Tabs defaultActiveKey={tabKeys.Streams}>
      <TabPane tab="Streams" key={tabKeys.Streams} forceRender={true}></TabPane>
      <TabPane tab="Videos" key={tabKeys.Videos} forceRender={true}></TabPane>
      <TabPane tab="Clips" key={tabKeys.Clips} forceRender={true}></TabPane>
    </Tabs>
  );
};

export default Home;
