#  # Python code to scrape the data from the website

# import requests
# from bs4 import BeautifulSoup
# import pandas as pd
# import numpy as np
# import html5lib

# def get_data(url):
#     """
#     Function to get the data from the website
#     """
#     # Get the html content
#     html_content = requests.get(url).text

#     # Parse the html content
#     soup = BeautifulSoup(html_content,"html.parser")

#     # get the cite class from the soup
#     cite = soup.find_all("a", )

#     # get the text from the cite class
#     cite = [c.get_text() for c in cite]

#     return cite

# url="https://www.google.com/search?q=deep+learning"

# print("Data Scraped!", get_data(url))