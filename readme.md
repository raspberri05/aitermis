[![DeepSource](https://app.deepsource.com/gh/raspberri05/aitermis:aitermis.svg/?label=active+issues&show_trend=true&token=kS_Yr_w77eJlN0Jnh6ZOXZtG)](https://app.deepsource.com/gh/raspberri05/aitermis:aitermis/)
[![DeepSource](https://app.deepsource.com/gh/raspberri05/aitermis:server.svg/?label=active+issues&show_trend=true&token=JhH_Ri5bxx-cZJIC_n4NQgj7)](https://app.deepsource.com/gh/raspberri05/aitermis:server/)

# aitermis

an ai powered cli tool to help speed up dev setup

read our documentation at [aitermis.nayasinghania.com](https://aitermis.nayasinghania.com) to get started and to learn how to use this tool!

## local development

### setup 

1. `cd server && pip install -r requirements.txt`
2. `cd ../aitermis && pip install -r requirements.txt`

## running

1. `cd server && fastapi dev`
2. (in another terminal tab/window) `cd aitermis && python watcher.py`
