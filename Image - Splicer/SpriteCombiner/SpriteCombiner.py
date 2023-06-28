#importing the os module
import os


import glob
#os.chdir('.')
dir = os.getcwd()

for filename in glob.glob(pathname= dir + '**/**', recursive=True):
    print(f'glob: {filename}')