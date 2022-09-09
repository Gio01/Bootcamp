from fileinput import filename
from locale import currency
from venv import create
import boto3
import uuid

#s3_client = boto3.client('s3')

#Create a connection to s3 which will source the aws/credentials 
#which have the aws access key and the secret key I have in the AWS CLI directory
#which the keys for gio_dev_credentials which is my root account!
s3_resource = boto3.resource('s3')

#connects to the s3 bucket
my_bucket = s3_resource.Bucket('myapp-gio-bucket')

#list all the objects located in that bucket
for obj in my_bucket.objects.all():
    print(obj)


#since AWS uses unique ids for creating a bucket we can use this uuid to 
#create a random unique id for us so that aws will be able to add it into 
#out buckets and not have naming issues with it not being unique
def create_bucket_name(bucket_prefix):
    return ''.join([bucket_prefix, str(uuid.uuid4())])

#creating a bucket using an S3 connection session!
def create_bucket():
    session = boto3.session.Session()
    curr_region = session.region_name
    bucket_name = create_bucket_name('test')
    bucket_response = s3_resource.create_bucket(Bucket = bucket_name)
    
    print(bucket_name, curr_region)
    return bucket_name, bucket_response
#it will print out us-east-1 which is the deafult we have added into the 
#aws config file!

#create_bucket()

bucket_instance = s3_resource.Bucket(name='test1ea2baac-6fe3-4d34-bd7e-fc3cb743ef66')
object_instance = bucket_instance.Object('we-bare-bear')
upload_file = object_instance.upload_file(Filename='C:\Users\gigor6\Pictures\we-bare-bear.png')

