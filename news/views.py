from mylib.helpers import get_user
from django.shortcuts import render, redirect
from .forms import PostForm
from .models import Post


def index(request):
    data = get_user(request)
    posts = Post.objects.all()
    data['posts'] = posts
    return render(request, 'news/index.html', context=data)


def create(request):
    data = get_user(request)
    if request.method == 'GET':
        data['form'] = PostForm()
        return render(request, 'news/create.html', context=data)
    elif request.method == 'POST':
        fill_form = PostForm(request.POST, request.FILES)
        fill_form.save()
        return redirect('/news')


def details(request, post_id):
    data = get_user(request)
    data['post'] = Post.objects.get(id=post_id)
    return render(request, 'news/details.html', context=data)


def edit(request, post_id):
    data = get_user(request)
    data['post'] = Post.objects.get(id=post_id)
    return render(request, 'news/edit.html', context=data)


def delete(request, post_id):
    data = get_user(request)
    data['post'] = Post.objects.get(id=post_id)
    return render(request, 'news/delete.html', context=data)
