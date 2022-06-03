export default function ChatBody() {
  return (
    <div className="chat__body">
      <div className="chat__body--msg-wrap  myMessage">
        <div className="chat__body--message">
          <div className="chat__body--message-avatar" style={{backgroundImage:"url()"}}></div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          dolorem enim voluptas soluta ducimus nam pariatur nostrum nobis!
          Excepturi, consequatur.
          <div className="chat__body--message-time">18:31</div>
        </div>
      </div>
      <div className="chat__body--msg-wrap contactMessage">
        <div className="chat__body--message">
        <div className="chat__body--message-avatar" style={{backgroundImage:`url("https://lh3.googleusercontent.com/ogw/ADea4I7NtRPcp7qRVbLmZB4kVLBw59I0sIrWbWulWA3w7A=s32-c-mo")`}}></div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad commodi
          modi consequatur officia, quod, corporis laudantium voluptatem alias,
          inventore odio cum pariatur placeat impedit. Voluptates animi
          exercitationem totam commodi voluptate itaque quibusdam perferendis
          tempora. Explicabo corporis iusto natus aliquam qui?
          <div className="chat__body--message-time">18:55</div>
        </div>
      </div>
    </div>
  );
}
