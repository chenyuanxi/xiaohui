// 导入WebSocket模块:
const WebSocket = require('ws');

const createWebSocket = function() {
	// 实例化WebSocket
	const wss = new WebSocket.Server({
		port: 8080
	});
	
	// 保存100条历史消息
	const history = []
	function addHistory (data) {
		if (history.length > 99) {
			history.shift()
			history.push(data)
		} else {
			history.push(data)
		}
	}
	
	// 给服务器对象上挂载一个广播的方法,向所有人广播
	wss.broadcast = function broadcast(data) {
		// 获取服务器所有的连接然后迭代
		wss.clients.forEach(function each(client) {
			// 如果连接是打开状态
			if (client.readyState === WebSocket.OPEN) {
				// 发送消息
				client.send(data);
			}
		});
	};

	wss.on('connection', function connection(ws) {
		ws.on('message', function incoming(data) {
			addHistory(JSON.parse(data))
			wss.broadcast(`[${data}]`)
		});
		ws.send(JSON.stringify(history))
	});
}

module.exports = createWebSocket
