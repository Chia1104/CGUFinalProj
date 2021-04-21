import requests
import pandas as pd

r = requests.get('https://www.dcard.tw/_api/forums/cgu/posts?limit=100')
list_of_dicts = r.json()

mID = [i["id"] for i in list_of_dicts]
mTime = [i["createdAt"] for i in list_of_dicts]
mTitle = [i["title"] for i in list_of_dicts]
mExcerpt = [i["excerpt"] for i in list_of_dicts]
aqi_dict = {
    "ID": mID,
    "CreatedAt": mTime,
    "Title": mTitle,
    "Excerpt": mExcerpt
}
df = pd.DataFrame(aqi_dict)
df.to_csv("aqi.csv", index = False)

for j in range(100):
    last = str(int(df.tail(1).ID))
    r_new = requests.get('https://www.dcard.tw/_api/forums/cgu/posts?before=' + last)
    list_of_dicts_new = r_new.json()

    mIDnew = [i["id"] for i in list_of_dicts_new]
    mTimenew = [i["createdAt"] for i in list_of_dicts_new]
    mTitlenew = [i["title"] for i in list_of_dicts_new]
    mExcerptnew = [i["excerpt"] for i in list_of_dicts_new]
    aqi_dict_new = {
        "ID": mIDnew,
        "CreatedAt": mTimenew,
        "Title": mTitlenew,
        "Excerpt": mExcerptnew
    }
    df= pd.DataFrame(aqi_dict_new)
    df.to_csv("aqi.csv", mode='a', header = False, index = False)