var tipuesearch = {"pages": [{'title': 'About', 'text': '個人倉儲: https://github.com/40823231-2/cd2021 \n', 'tags': '', 'url': 'About.html'}, {'title': 'stage1', 'text': '兩人小組:40823231 40823219 \n 兩人倉儲: https://github.com/40823219/stage1-bg19 \n 製作物品 \n \n \n', 'tags': '', 'url': 'stage1.html'}, {'title': 'w1', 'text': '使用gitter進行小組討論要製作的主題 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'W2~W3CoppeliaSim程式模擬', 'text': '分工繪製零件圖 \n 組合零件圖，修改尺寸 \n 以及 CoppeliaSim程式模擬 \n 彈射車 \n \n', 'tags': '', 'url': 'W2~W3CoppeliaSim程式模擬.html'}, {'title': 'W4', 'text': '上台報告影片 \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'W5', 'text': '四設計二乙班 40823231 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'stage2', 'text': '小組倉儲: https://github.com/40823236/stage2-bg9 \n 小組網站: https://40823231-2.github.io/stage2-bg9/content/index.html \n \n', 'tags': '', 'url': 'stage2.html'}, {'title': 'W6', 'text': '使用gitter進行討論，並進行分工 \n 分工如下: \n 繪圖: 40823212 \n 模擬: 40823219、40823231、40823236 \n 程式編排: 40823219、40823231、40823236 \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7~W8', 'text': '零件繪製以及修改 \n', 'tags': '', 'url': 'W7~W8.html'}, {'title': 'W8~W9CoppeliaSim程式模擬', 'text': 'CoppeliaSim程式模擬 \n 火車輪CoppeliaSim模擬 \n \n', 'tags': '', 'url': 'W8~W9CoppeliaSim程式模擬.html'}, {'title': 'stage3', 'text': '', 'tags': '', 'url': 'stage3.html'}, {'title': 'task1', 'text': 'stage3-bg1 repo  |  stage3-bg1 site  |  40823245 repo  |  40823245 site  |  40823251 repo  |  40823251 site  |  40823208 repo  |  40823208 site  |  40823213 repo  |  40823213 site  |  40823232 repo  |  40823232 site  |  40823234 repo  |  40823234 site  |  40823235 repo  |  40823235 site  |  40823246 repo |  40823246 site ---------- stage3-bg2 repo  |  stage3-bg2 site  |  40823217 repo  |  40823217 site  |  40823201 repo  |  40823201 site  |  40823209 repo  |  40823209 site  |  40823210 repo  |  40823210 site  |  40823206 repo  |  40823206 site  |  40823207 repo  |  40823207 site  |  40823223 repo  |  40823223 site  |  40823224 repo |  40823224 site ---------- stage3-bg3 repo  |  stage3-bg3 site  |  40823236 repo  |  40823236 site  |  40823202 repo  |  40823202 site  |  40823203 repo  |  40823203 site  |  40823212 repo  |  40823212 site  |  40823219 repo  |  40823219 site  |  40823222 repo  |  40823222 site  |  40823231-2 repo  |  40823231-2 site  |  40823244 repo |  40823244 site ---------- stage3-bg4 repo  |  stage3-bg4 site  |  40823239 repo  |  40823239 site  |  s40723140 repo  |  s40723140 site  |  s40723128 repo  |  s40723128 site  |  s40723139 repo  |  s40723139 site  |  s40723106 repo  |  s40723106 site  |  s40723135 repo  |  s40723135 site  |  s40723143 repo  |  s40723143 site  |  s40723215 repo |  s40723215 site ---------- stage3-bg5 repo  |  stage3-bg5 site  |  40823221 repo  |  40823221 site  |  40823204 repo  |  40823204 site  |  40823205 repo  |  40823205 site  |  40823220 repo  |  40823220 site  |  40823228 repo  |  40823228 site  |  40823237 repo  |  40823237 site  |  40823242 repo  |  40823242 site  |  40823250 repo |  40823250 site  |  40832244 repo |  40832244 site ---------- stage3-bg6 repo  |  stage3-bg6 site  |  40823225 repo  |  40823225 site  |  40823214 repo  |  40823214 site  |  40823218 repo  |  40823218 site  |  40823211 repo  |  40823211 site  |  40823248 repo  |  40823248 site  |  40823247 repo  |  40823247 site  |  40823216 repo  |  40823216 site  |  40823238 repo |  40823238 site ---------- stage3-bg7 repo  |  stage3-bg7 site  |  40623144 repo  |  40623144 site  |  40823233 repo  |  40823233 site  |  s40723224 repo  |  s40723224 site  |  40823241 repo  |  40823241 site  |  40423155 repo  |  40423155 site  |  40823227 repo  |  40823227 site  |  s40723233 repo  |  s40723233 site ---------- \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '利用白窗以及鍵盤控制Coppeliasim \n \n 程式碼 \n import sim as vrep\nimport math\nimport random\nimport time\nimport keyboard\n \nprint (\'Start\')\n \n# Close eventual old connections\nvrep.simxFinish(-1)\n# Connect to V-REP remote server\nclientID = vrep.simxStart(\'192.168.1.111\', 19997, True, True, 5000, 5)\n  \nif clientID !=-1:\n    print (\'Connected to remote API server\')\n   \n    res = vrep.simxAddStatusbarMessage(\n        clientID, "40823231",\n        vrep.simx_opmode_oneshot)\n          \n    if res not in (vrep.simx_return_ok, vrep.simx_return_novalue_flag):\n        print("Could not add a message to the status bar.")\n          \n    opmode = vrep.simx_opmode_oneshot_wait\n     \n    vrep.simxStartSimulation(clientID, opmode)\n    ret,shaft1=vrep.simxGetObjectHandle(clientID,"shaft_1",opmode)\n    ret,shaft2=vrep.simxGetObjectHandle(clientID,"shaft_2",opmode)\n    ret,shaft3=vrep.simxGetObjectHandle(clientID,"shaft_3",opmode)\n\n    while True:\n        if keyboard.is_pressed("w"):\n            vrep.simxSetJointTargetVelocity(clientID,shaft1,2,opmode)\n            print("w")\n            \n        if keyboard.is_pressed("s"):\n            vrep.simxSetJointTargetVelocity(clientID,shaft1,0,opmode)\n            print("s")\n            \n        if keyboard.is_pressed("a"):\n            vrep.simxSetJointTargetVelocity(clientID,shaft2,2,opmode)\n            print("a")\n\n        if keyboard.is_pressed("b"):\n            vrep.simxSetJointTargetVelocity(clientID,shaft2,0,opmode)\n            print("b")\n            \n        if keyboard.is_pressed("c"):\n            vrep.simxSetJointTargetVelocity(clientID,shaft3,0.1,opmode)\n            print("c")\n\n        if keyboard.is_pressed("z"):\n            vrep.simxSetJointTargetVelocity(clientID,shaft3,0,opmode)\n            print("z")            \nelse:\n    print (\'Failed connecting to  remote API server\')\n    print (\'End\') \n', 'tags': '', 'url': 'task2.html'}]};