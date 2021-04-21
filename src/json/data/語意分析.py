from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types
import os

text = '乳題，昨天我的筆電失蹤，ASUS 深藍色的筆電，有用黑色袋子裝，麻煩好心人士撿到通知我一聲ಥ_ಥ'

def emotion(thetext):
   client = language.LanguageServiceClient()
   text = thetext
   document = types.Document(
                              content=text,
                              type=enums.Document.Type.PLAIN_TEXT)
   sentiment = client.analyze_sentiment(document=document).document_sentiment
   return([sentiment.score, sentiment.magnitude])

get = emotion(text)
   